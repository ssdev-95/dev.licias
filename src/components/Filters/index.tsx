import React from 'react';
import Search from '../Search';
import filters from '../../api/Filters.json'

import styles from '../../styles/components/Filters.module.css';

export default function Filters() {
    const areas = filters.map(filter=>(filter.type=='area'&&(<li key={filter.name}>{filter.name}</li>)))
    const categories = filters.map(filter=>(filter.type=='category'&&(<li key={filter.name}>{filter.name}</li>)))

    const setQuery= (event) => {
        window.addEventListener('click', ()=>{
            event.preventDefault()
        })
    }

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