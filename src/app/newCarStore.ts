import { makeAutoObservable } from 'mobx';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { Timestamp } from 'firebase/firestore';
import { capitalize } from '@/utilities';

type NewCar = {
    brand: string;
    model: string;
    year: number;
    price: number;
    location: string | void;
    thumbnailImage: string;
    published: Timestamp;
}

class NewCarStore {
    car: NewCar = {
        brand: '',
        model: '',
        year: 1990,
        price: 0,
        location: '',
        thumbnailImage: '',
        published: new Timestamp(new Date().getSeconds(), new Date().getMilliseconds())
    }

    constructor() {
        makeAutoObservable(this);
    }

    onChangeBrand(brand: string) {
        this.car.brand = capitalize(brand);
    }

    onChangeModel(model: string) {
        this.car.model = capitalize(model);
    }

    onChangeYear(year: string) {
        this.car.year = +year;
    }

    onChangePrice(price: string) {
        this.car.price = +price;
    }

    onChangeLocation(location: string) {
        this.car.location = location;
    }

    onChangeImage(thumbImg: string) {
        this.car.thumbnailImage = thumbImg;
    }

    async onSubmitNewCar(event: any) {
        event.preventDefault();

        this.car.published = Timestamp.fromDate(new Date());
        const docRef = collection(db, 'cars')
        await addDoc(docRef, this.car)
    }
}

export const newCarStore = new NewCarStore();