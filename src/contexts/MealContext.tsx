import { createContext, useState, ReactNode } from "react";

interface MealContextData {
    meal: MealData;
    createMeal: (params: MealData) => void
}

interface MealContextProps {
    children: ReactNode
}

interface MealData {
    name: string;
    pic: string;
}

export const MealContext = createContext({} as MealContextData)

export function MealContextProvider ({children }: MealContextProps) {
    const [meal, setMeal] = useState(null)

    const createMeal = (meal: MealData) => {
        setMeal(meal)
    }

    return (
        <MealContext.Provider value={{
            meal,
            createMeal
        }}>
            {children}
        </MealContext.Provider>
    )
}

