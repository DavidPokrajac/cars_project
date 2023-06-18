'use client';
import React, { useState } from 'react';
import '../styles/EditedCar.css';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/config';
import { useRouter } from 'next/navigation';

const EditedCar = ({ car }: any) => {
    const [price, setPrice] = useState(car.price);
    const router = useRouter();

    const submitEditingHandler = async (event: any) => {
        event.preventDefault();
        
        const carRef = doc(db, "cars", car.id);

        await updateDoc(carRef, {
            price: price
        });

        router.push('/');

    }

    return(
        <>
            <h1>Edit advertisement</h1>
            <form onSubmit={submitEditingHandler}>
                <h2>General informations</h2>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input id="brand" type="text" value={car.brand} />
                </div>
                <div>
                    <label htmlFor="model">Model:</label>
                    <input id="model" type="text" value={car.model} />
                </div>
                <div>
                    <label htmlFor="year">Year:</label>
                    <input id="year" type="number" value={car.year} />
                </div>
                {/* <div>
                    <label htmlFor="km's">Number of kilometers:</label>
                    <input id="km's" type="number" value="" />
                    </div> */ }
                <h2>Location</h2>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input id="location" type="text" value={car.location} />
                </div>
                <h2>Pricing</h2>
                <div>
                    <label htmlFor="price">Price (&#36;):</label>
                    <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <h2>Images</h2>
                <div>
                    <label htmlFor="carImage">Image:</label>
                    <span>
                        <img src={car.thumbnailImage} />
                    </span>
                </div>
                {/* <div>
                    <label htmlFor="editedDate">Edited Date:</label>
                    <input id="editedDate" type="datetime-local" />
                </div> */ }
                <button type="submit">Finish Edit</button>
            </form>
        </>
    );
}

export default EditedCar;