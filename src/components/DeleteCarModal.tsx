'use client';
import React, { useEffect } from 'react';
import '../styles/DeleteCarModal.css';
import Image from 'next/image';
import { modalStore } from '@/app/modalStore';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '@/firebase/config';
import { observer } from 'mobx-react';
import { carsStor } from '@/app/store';

const DeleteCarModal = observer(({ car, cars }: any) => {

    useEffect(() => {
        carsStor.getCars();
    }, [cars])

    const removeCarHandler = async () => {
        await deleteDoc(doc(db, "cars", car.id));
        carsStor.getCars();
        modalStore.closeDeleteModal();
    }

    return(
        <div className="delete-modal-container">
            <div className="delete-modal">
                <div className="title">
                    <h3>Are you sure?</h3>
                </div>
                <p>You are about to delete</p>
                <span>
                    <Image src={car.thumbnailImage} alt={car.brand} width="100" height="100" />
                </span>
                <p className="car">
                    <span>{car.brand} {car.model}, {car.year}</span><br />
                    <span>Price: {car.price}</span>
                </p>
                <div className="delete-options">
                    <button onClick={() => removeCarHandler()}>Yes, I&lsquo;m sure</button>
                    <button onClick={() => modalStore.closeDeleteModal()}>No, cancel it</button>
                </div>
            </div>
        </div>
    );
});

export default DeleteCarModal;