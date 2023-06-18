'use client'
import { observer } from 'mobx-react';
 
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react';
import { carsStor } from '../store';
import EditedCar from '@/components/EditedCar';

const EditPage = observer(() => {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('carBrand')
 
    useEffect(() => {
        carsStor.getCars();
    }, [])

    const editedCar = carsStor.cars.filter(car => car.id === search);
    console.log(editedCar)

    return(
        <div>
            {editedCar.map(car => {
                return <EditedCar key={car.id} car={car} />
            })}
        </div>
    );
});

export default EditPage;