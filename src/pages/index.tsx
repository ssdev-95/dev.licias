import React, { useContext } from 'react';
import MealDetailsModal from '../components/MealDetailsModal';
import {MealDetailsModalContext} from '../contexts/MealDetailsModalContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const { isModalOpen } = useContext(MealDetailsModalContext)

  return (
    <div className={styles.container}>
      { isModalOpen && <MealDetailsModal /> }
      <nav className={styles.navbar}></nav>
      <aside className={styles.filters}></aside>
      <section className={styles.mealsList}>
        <h2>Meals Selection</h2>
        <div></div>
      </section>
      <section className={styles.search}></section>
      <footer></footer>
    </div>
  )
}
