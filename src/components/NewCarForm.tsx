'use client';
import React from "react";
import '../styles/NewCar.css';
import { newCarStore } from "@/app/newCarStore";
import { observer } from "mobx-react";

const NewCarForm = observer(() => {
    return(
        <>
            <h1>New Car</h1>
            <form onSubmit={(event) => newCarStore.onSubmitNewCar(event)}>
                <h2>General informations</h2>
                <div>
                    <label htmlFor="car-brand">Brand:</label>
                    <input id="car-brand" type="text" placeholder="Honda, Mazda, Toyota, BMW, ..." onChange={(event) => newCarStore.onChangeBrand(event.target.value)} value={newCarStore.car.brand} />
                </div>
                <div>
                    <label htmlFor="car-model">Model:</label>
                    <input id="car-model" type="text" placeholder="Prius, Civic, Twingo, Tucson ..." onChange={(event) => newCarStore.onChangeModel(event.target.value)} value={newCarStore.car.model} />
                </div>
                <div>
                    <label htmlFor="car-year">Year of production:</label>
                    <input id="car-year" type="number" onChange={(event) => newCarStore.onChangeYear(event.target.value)} value={newCarStore.car.year} />
                </div>
                <h2>Location</h2>
                <div>
                    <label htmlFor="car-location">Location:</label>
                    <input id="car-location" type="text" placeholder="Your town, your country" onChange={(event) => newCarStore.onChangeLocation(event?.target.value)} />
                </div>
                <h2>Pricing</h2>
                <div>
                    <label htmlFor="car-price">Price (&#36;):</label>
                    <input id="car-price" type="number" onChange={(event) => newCarStore.onChangePrice(event.target.value)} value={newCarStore.car.price} />
                </div>
                <h2>Images</h2>
                <div>
                    <label htmlFor="car-image">Insert image:</label>
                    <input id="car-image" type="url" placeholder="Place a car image url" onChange={(event) => newCarStore.onChangeImage(event.target.value)} value={newCarStore.car.thumbnailImage} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
});

export default NewCarForm;