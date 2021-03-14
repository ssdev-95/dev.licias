import React, { useContext } from 'react';
import { MealListContext } from '../../contexts/MealListContext';

import styles from '../../styles/components/MealList.module.css';

export default function MealList() {
    const {mealList} = useContext(MealListContext)

    const lista = mealList.map(mealName=><li key={mealName}>{mealName}</li>)

    return (
        <div className={styles.mealListContainer}>
            <h3>Meals</h3>
            <ul> {lista} </ul>
        </div>
    )
}