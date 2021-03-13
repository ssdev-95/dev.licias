import React from 'react';

import styles from '../../styles/components/Search.module.css';

export default function Search() {

    const submit = event => {
        window.addEventListener('click', () => {
            event.preventDefault()
        })
    }
    return (
        <div className={styles.searchContainer}>
            <input type="text" name="mealSearcher" id="mealSearcher"/>
            <a href="#" onClick={submit}>search</a>
        </div>
    )
}