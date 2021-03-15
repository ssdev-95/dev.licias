import React, {useContext} from 'react';
import Search from '../Search';
import filters from '../../api/Filters.json'
import { MealListContext } from '../../contexts/MealListContext';

import styles from '../../styles/components/Filters.module.css';

export default function Filters() {
    const {setListUrl} = useContext(MealListContext)

    const getURL= (event) => {
        window.addEventListener('click', ()=>{
            event.preventDefault()
        })
        event.target.className=='area' ?  setListUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${event.target.id}`) : setListUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${event.target.id}`)
    }

    const areas = filters.map(filter=>(filter.type=='area'&&(<li className={filter.type} id={filter.name} key={filters.indexOf(filter)} onClick={getURL}>{filter.name}</li>)))

    const categories = filters.map(filter=>(filter.type=='category'&&(<li className={filter.type} id={filter.name} key={filters.indexOf(filter)} onClick={getURL}>{filter.name}</li>)))

    return (
        <div className={styles.filtersContainer}>
            <Search />
            <p>By areas:</p>
            <ul>
                {areas}
            </ul>

            <p>By categories:</p>
            <ul>
                {categories}
            </ul>
        </div>
    )
}