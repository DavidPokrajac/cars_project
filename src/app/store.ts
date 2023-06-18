import { makeAutoObservable, runInAction } from 'mobx';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';
import { paginate } from '@/utilities';

const carsCollectionRef = collection(db, 'cars');

type CarDocument = {
    model: string;
    brand: string;
    id: string;
    thumbnailImage: string;
    year: number;
    location: string;
    published: {
      seconds: number;
      nanoseconds: number;
    };
    price: number;
}[]

class CarsStore {
    cars: CarDocument = [];
    state: string = 'pending';
    defaultResPerPage: number = 5;
    pageLength: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async getCars(i: number = 1) {
        this.cars = [];
        this.state = 'pending';
        try {
            const data = await getDocs(carsCollectionRef);
            const hey: CarDocument = data.docs.filter((item: any, index: number) => {
                return paginate(index, i);
            }).map((car) => {
                const { model, brand, thumbnailImage, year, location, published, price } = car.data();
                return { model, brand, id: car.id, thumbnailImage, year, location, published, price }
            })
            runInAction(() => {
                this.cars = hey;
                this.state = 'done';
                this.pageLength = data.docs.length;
            });
        } catch(error) {
            runInAction(() => {
                this.state = 'error';
            });
        }
    }

    sortByOldest() {
        this.cars.sort((a, b) => a.year - b.year);
    }

    sortByNewest() {
        this.cars.sort((a, b) => b.year - a.year);
    }

    sortByHighestPrice() {
        this.cars.sort((a, b) => b.price - a.price);
    }

    sortByLowestPrice() {
        this.cars.sort((a, b) => a.price - b.price);
    }

    sortByPublished() {
        this.cars.sort((a, b) => b.published.seconds - a.published.seconds);
    }
}

export const carsStor = new CarsStore();