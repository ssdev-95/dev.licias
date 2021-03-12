import React, {useContext} from 'react';
import { MealContext } from '../contexts/MealContext';

export default function Meal() {
    const {meals} = useContext(MealContext)

    const mealList = meals.map(meal => <div>
        <img src={meal.pic} alt=""/>
        <h2>meal.name</h2>
    </div>)

    return (
        <div className={'mealContainer'}>
            {mealList}
        </div>
    )
}