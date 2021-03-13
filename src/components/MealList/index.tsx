import React from 'react';
import styles from '../../styles/components/MealList.module.css';

export default function MealList() {
    return (
        <div className={styles.mealListContainer}>
            <h3>Meals</h3>
            <ul></ul>
        </div>
    )
}