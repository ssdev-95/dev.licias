import React, {useContext, useEffect, useState} from 'react';
import { MealContext } from '../../contexts/MealContext';

import styles from '../../styles/components/Meal.module.css';

export default function Meal() {
    const {meal} = useContext(MealContext)
    const [ingredientList, setIngredientList] = useState([])

    const {id, 
        name, 
        drinkAlternate, 
        area, 
        instructions, 
        thumb, 
        tags, 
        youtubeUrl, 
        ingredients} = meal
        
        useEffect(()=>{
            let ingredientos = []
            ingredients.map(ingredient=>{
                if(ingredient.name!=""){
                    if(ingredient.name!=null){
                        ingredientos.push(`${ingredient.name}: ${ingredient.measure}`)
                    }
                }
            })
            setIngredientList(ingredientos)
        }, [ingredients])

    return (
        <div className={styles.mealContainer}>
            <h2>{`${id} - ${name}`}</h2>
            <div className={styles.ingredientContainer}>
                <div className={styles.leftside}>
                    <img className={styles.thumb} src={thumb} alt=""/>
                    <p>{area}</p>
                    <p>{drinkAlternate}</p>
                    <p>{tags}</p>
                    <p>See on <a href={youtubeUrl}>Youtube</a></p>
                </div>
                <div className={styles.instructions}>
                    <p>How to prepare:</p>
                    <p>{instructions}</p>
                </div>
                <div className={styles.ingredients}>
                    <p>Ingredients</p>
                    <ul>
                        {ingredientList.map(ingredient=><li key={ingredientList.indexOf(ingredient)}>{ingredient}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}