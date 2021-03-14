import { createContext, useState, ReactNode } from "react";

interface MealContextData {
    meal: MealData;
    createMeal: (params) => void
}

interface MealContextProps {
    children: ReactNode
}

interface MealData {
    id: string;
    name: string;
    drinkAlternate: string;
    area: string;
    instructions: string;
    thumb: string;
    tags: string;
    youtubeUrl: string;
    ingredients:  Ingredients[];
}

interface Ingredients { 
        name: string;
        measure: string;
}

export const MealContext = createContext({} as MealContextData)

export function MealContextProvider ({children }: MealContextProps) {
    const defaultMeal = {
        id:'52771',
        name:'Spicy Arrabiata Penne', 
        drinkAlternate: "", 
        category:'Vegetarian',
        area:'Italian', 
        instructions:'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil. Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.',
        thumb:'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        tags:'Pasta,Curry',
        youtubeUrl:'https://www.youtube.com/watch?v=1IszT_guI08',
        ingredients: [
            {"name":"penne rigate","measure":"1 pound"},
            {"name":"olive oil","measure":"1/4 cup"},
            {"name":"garlic","measure":"3 cloves"},
            {"name":"chopped tomatoes","measure":"1 tin"},
            {"name":"red chile flakes","measure":"1/2 teaspoon"},
            {"name":"italian seasoning","measure":"1/2 teaspoon"},
            {"name":"basil","measure":"6 leaves"},
            {"name":"Parmigiano-Reggiano","measure":"spinkling"}]
    }
    const [meal, setMeal] = useState<MealData>(defaultMeal)

    const createMeal = (meal) => {
        //setMeal(meal)
        console.log(meal)
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

