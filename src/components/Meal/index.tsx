import React, {useContext} from 'react';
//import { MealContext } from '../../contexts/MealContext';

import styles from '../../styles/components/Meal.module.css';

export default function Meal() {
    //const {meal} = useContext(MealContext)

    return (
        <div className={styles.mealContainer}>
            <h2>Meal Title</h2>
        </div>
    )
}