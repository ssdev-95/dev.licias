import React, {useContext} from 'react';
import { MealContext } from '../../contexts/MealContext';

import styles from '../../styles/components/Meal.module.css';

export default function Meal() {
    const {meal} = useContext(MealContext)

    const {id, 
        name, 
        drinkAlternate, 
        area, 
        instructions, 
        thumb, 
        tags, 
        youtubeUrl, 
        ingredients} = meal

    return (
        <div className={styles.mealContainer}>
            <h2>{name}</h2>
            <img src={thumb} alt=""/>
        </div>
    )
}