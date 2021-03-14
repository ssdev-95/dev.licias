import React from 'react';
import Filters from '../components/Filters';
import MealList from '../components/MealList';
import Meal from '../components/Meal';

import styles from '../styles/pages/Home.module.css';
import { MealContextProvider } from '../contexts/MealContext';

export default function Home() {

  return (
      <MealContextProvider>
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <img src="icons/food_icon.png" alt="Food icon"/>
      </nav>
      <aside className={styles.filters}>
        <Filters />
      </aside>
      <section className={styles.mealsList}>
        <Meal/>
      </section>
      <section className={styles.search}>
        <MealList />
      </section>
      <footer></footer>
    </div>
      </MealContextProvider>
  )
}
