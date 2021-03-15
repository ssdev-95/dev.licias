import React, {useContext} from 'react';
import {SearchContext} from '../../contexts/SearchContext';
import {useForm} from 'react-hook-form';

import styles from '../../styles/components/Search.module.css';

export default function Search() {
   const {register, handleSubmit} = useForm()
   const {submit} = useContext(SearchContext)

    return (
        <div className={styles.searchContainer}>
            <input ref={register({required: true})} type="text" name="mealSearcher" id="mealSearcher"/>
            <a href="#" onClick={handleSubmit(submit)}>search</a>
        </div>
    )
}