'use client';
import React from 'react';
import CarsList from '../components/CarsList';
import '../styles/app.css';
import SelectionMenu from '@/components/SelectionMenu';
import { carsStor } from './store';
import Pagination from '@/components/Pagination';
import { modalStore } from './modalStore';
import Navigation from '@/components/Navigation';

const Home = () => {
  return(
    <>
      <Navigation />
      <main>
        <SelectionMenu resultsLength={carsStor} modalStore={modalStore} />
        <CarsList cars={carsStor} />
        <Pagination changeHandler={carsStor} resultsLength={carsStor} defRes={carsStor.defaultResPerPage} />
      </main>
    </>
  );
};

export default Home;