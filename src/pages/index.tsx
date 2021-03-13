import React from 'react';
import Filters from '../components/Filters';
import MealList from '../components/MealList';
import Meal from '../components/Meal';

import styles from '../styles/pages/Home.module.css';
import { MealContextProvider } from '../contexts/MealContext';

export default function Home() {

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}></nav>
      <aside className={styles.filters}>
        <Filters />
      </aside>
      <MealContextProvider>
      <section className={styles.mealsList}>
        <Meal/>
      </section>
      </MealContextProvider>
      <section className={styles.search}>
        <MealList />
      </section>
      <footer></footer>
    </div>
  )
}