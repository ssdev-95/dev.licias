import React from 'react';
import Search from '../Search';
import filters from '../../api/Filters.json'

import styles from '../../styles/components/Filters.module.css';

export default function Filters() {
    const areas = filters[0].map(area=><li>{area.srtArea}</li>)
    const categories = filters[1].map(category=>{<li>{category.srtCategory}</li>})

    const setQuery= (event) => {
        window.addEventListener('click', ()=>{
            event.preventDefault()
        })
    }

    return (
        <div className={styles.filtersContainer}>
            <Search />
            <ul>
                {areas}
                {categories}
            </ul>
        </div>
    )
}