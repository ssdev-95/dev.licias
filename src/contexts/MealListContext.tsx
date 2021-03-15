import { createContext, ReactNode, useEffect, useState } from "react";
import { filterMeals } from '../api/MealSearcher';

interface MealListContextProviderProps {
    children: ReactNode;
}

interface MealListContextData {
    mealList: string[];
    setListUrl: (params:string) => void;
}

export const MealListContext = createContext({} as MealListContextData)

export const MealListContextProvider = ({children}: MealListContextProviderProps) => {
    const [listUrl, setListUrl] = useState('https://www.themealdb.com/api/json/v1/1/filter.php?a=american')
    const [mealList, setMealList] = useState(['Arrabiata', 'Carrot Cake', 'Teriyaki'])

    useEffect(()=>{
        filterMeals(listUrl).then(res=>{
            let lista = []
            res.meals.map(meal=>lista.push(meal.strMeal))
            setMealList(lista)
        })
    }, [listUrl])

    return (
        <MealListContext.Provider value={{
            mealList,
            setListUrl
        }}>
            {children}
        </MealListContext.Provider>
    )
}