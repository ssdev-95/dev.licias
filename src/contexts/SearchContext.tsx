import {createContext, ReactNode, useEffect, useState, useContext} from 'react';
import { formatMeal, searchMeal } from '../api/MealSearcher';

import {MealContext} from './MealContext';

interface SeacrhContextProviderProps {
    children: ReactNode;
}

interface SeacrhContextData {
    submit: (params) => void;
}

export const SearchContext = createContext({} as SeacrhContextData)

export const SearchContextProvider = ({children}: SeacrhContextProviderProps) => {
    const [query, setQuery] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=carrot_cake')
    const {createMeal} = useContext(MealContext)

    const submit = data => {
        window.addEventListener('click', event => {
            event.preventDefault()
        })

        setQuery(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data.mealSearcher}`)
    }
    useEffect(()=>{
        searchMeal(query).then(res=>{
            try {
                createMeal(formatMeal(res.meals[0]))                
            } catch (err) {
                console.log(err.message)
                alert('404 - Meal not found')
            }
        })
    }, [query])

    return (
        <SearchContext.Provider value={{
            submit
        }}>
            {children}
        </SearchContext.Provider>
    )
}