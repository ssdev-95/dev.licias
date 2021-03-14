import React, {useEffect, useState, useContext} from 'react';
import {useForm} from 'react-hook-form';

import { searchMeal } from '../../api/MealSearcher';
import {MealContext} from '../../contexts/MealContext';

import styles from '../../styles/components/Search.module.css';

export default function Search() {
    const [query, setQuery] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=carrot_cake')
    const {register, handleSubmit} = useForm()
    const {meal} = useContext(MealContext)

    const submit = data => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })

        setQuery(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data.mealSearcher}`)
    }

    useEffect(()=>{
        searchMeal(query).then(res=>{
            console.log(res.meals[0])
        })
    }, [query])

    return (
        <div className={styles.searchContainer}>
            <input ref={register({required: true})} type="text" name="mealSearcher" id="mealSearcher"/>
            <a href="#" onClick={handleSubmit(submit)}>search</a>
        </div>
    )
}