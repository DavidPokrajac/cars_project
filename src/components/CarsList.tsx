import React, { useEffect, Fragment } from 'react';
import CarItem from './CarItem';
import '../styles/CarList.css';
import { observer } from 'mobx-react';
import { modalStore } from '@/app/modalStore';
import DeleteCarModal from './DeleteCarModal';
import { Suspense } from 'react';

type CarProps = {
    car: {
        brand: string;
        model: string;
        id: string;
        thumbnailImage: string;
        year: number;
        location: string;
        published: {
            seconds: number;
            nanoseconds: number;
        };
        price: number;
    }
};

const CarsList = observer(({ cars }: any) => {
    useEffect(() => {
        cars.getCars();
    }, [cars, cars.defaultResPerPage])

    const removeCarHandler = (event?: any, id?: any, car?: any) => {
        if(event.target.className === id) {
            modalStore.openDeleteModal(car);
        }
    }

    return(
        <>
            <ul className="car-list">
                {cars.cars.map((car: any) => {
                    return(
                        <Fragment key={car.id}>
                            <CarItem car={car} removeCarHandler={removeCarHandler} />
                        </Fragment>
                    );
                })}
            </ul>
            {modalStore.isDeleteModalOpen ? <DeleteCarModal car={modalStore.carToDel} /> : null}
        </>
    );
});

export default CarsList;