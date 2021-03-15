import React, { useContext } from 'react';
import { searchMeal, formatMeal } from '../../api/MealSearcher';
import { MealListContext } from '../../contexts/MealListContext';
import { MealContext } from '../../contexts/MealContext';

import styles from '../../styles/components/MealList.module.css';

export default function MealList() {
    const {mealList} = useContext(MealListContext)
    const {createMeal} = useContext(MealContext)

    const submit = event => {
        window.addEventListener('click', ()=>{
            event.preventDefault()
        })
        
        searchMeal(`https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.className}`).then(res=>{
            createMeal(formatMeal(res.meals[0]))
        })
    }

    const lista = mealList.map(mealName=><li className={mealName} key={mealList.indexOf(mealName)} onClick={submit}>{mealName}</li>)

    return (
        <div className={styles.mealListContainer}>
            <h3>Meals</h3>
            <ul> {lista} </ul>
        </div>
    )
}

function createMeal(arg0: { id: string; name: string; drinkAlternate: string; area: string; instructions: string; thumb: string; tags: string; youtubeUrl: string; ingredients: { name: string; measure: string; }[]; }) {
    throw new Error('Function not implemented.');
}
