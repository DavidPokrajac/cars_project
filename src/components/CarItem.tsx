'usse client';
import React, { useMemo } from 'react';
import '../styles/CarItem.css';
import Image from 'next/image';
import { getDateOfPublish, formatPrice, carTypeLabel } from '@/utilities';
import { Timestamp } from "firebase/firestore";
import Link from 'next/link';
import { modalStore } from '@/app/modalStore';
import { observer } from 'mobx-react';
import DeleteCarModal from './DeleteCarModal';
import { carsStor } from '@/app/store';

type CarProps = {
    car: {
        brand: string;
        model: string;
        thumbnailImage: string;
        year: number;
        location: string;
        published: {
            seconds: number;
            nanoseconds: number;
        };
        price: number;
        id: string;
    }
    removeCarHandler: (event: any, id: any, car: any) => void
}

const CarItem = observer(({ car, removeCarHandler }: CarProps) => {
    
    const timeStamp = useMemo(() => new Timestamp(car.published.seconds, car.published.nanoseconds), [car.published.seconds, car.published.nanoseconds]);
    const carAge = carTypeLabel(car.year);

    return(
        <>
        <div className="car-item">
            <div className="thumbnail">
                <Image width={100} height={100} src={car.thumbnailImage} alt={car.model} />
            </div>
            <div className="car-details">
                <p className="car-name">
                    {car.brand} {car.model}
                    {carAge >= 5 ? <span>Used car</span> : <span>New Car</span>}
                </p>
                <p>Year of production: {car.year}</p>
                <p>Car location: {car.location}</p>
                <p className="published">Published: {getDateOfPublish(timeStamp.toDate())}</p>
                <div>
                    <Link href={{
                        pathname: 'edit',
                        query: { carBrand: car.id }
                    }}>Edit</Link>
                    <button className={car.id} onClick={(event) => removeCarHandler(event, car.id, car)}>Remove</button>
                </div>
            </div>
            <div className="car-price">
                <span>{formatPrice(car.price)}</span>
            </div>
        </div>
        </>
    );
});

export default CarItem;