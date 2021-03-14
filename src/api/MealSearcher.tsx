import Meal from './MealType';
export const filterMeals = async (filter:string, query:string) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?${filter}=${query}`
    const data = await fetch(url)
    const result = await data.json()

    console.log(result)
}

export const searchMeal = async (url:string) => {
    const data = await fetch(url)
    const result = await data.json()

    return result
}

export const formatMeal = (meal:Meal) => {
    const ingredients = [
        {name:meal.strIngredient1, measure:meal.strMeasure1},
        {name:meal.strIngredient2, measure:meal.strMeasure2},
        {name:meal.strIngredient3, measure:meal.strMeasure3},
        {name:meal.strIngredient4, measure:meal.strMeasure4},
        {name:meal.strIngredient5, measure:meal.strMeasure5},
        {name:meal.strIngredient6, measure:meal.strMeasure6},
        {name:meal.strIngredient7, measure:meal.strMeasure7},
        {name:meal.strIngredient8, measure:meal.strMeasure8},
        {name:meal.strIngredient9, measure:meal.strMeasure9},
        {name:meal.strIngredient10, measure:meal.strMeasure10},
        {name:meal.strIngredient11, measure:meal.strMeasure11},
        {name:meal.strIngredient12, measure:meal.strMeasure12},
        {name:meal.strIngredient13, measure:meal.strMeasure13},
        {name:meal.strIngredient14, measure:meal.strMeasure14},
        {name:meal.strIngredient15, measure:meal.strMeasure15},
        {name:meal.strIngredient16, measure:meal.strMeasure16},
        {name:meal.strIngredient17, measure:meal.strMeasure17},
        {name:meal.strIngredient18, measure:meal.strMeasure18},
        {name:meal.strIngredient19, measure:meal.strMeasure19},
        {name:meal.strIngredient20, measure:meal.strMeasure20},
    ]

    const {
        idMeal, 
        strMeal,
        strDrinkAlternate,
        strArea,
        strInstructions,
        strYoutube,
        strMealThumb,
        strTags
        } = meal

    return {
        id: idMeal,
        name: strMeal,
        drinkAlternate: strDrinkAlternate,
        area: strArea,
        instructions: strInstructions,
        thumb: strMealThumb,
        tags: strTags,
        youtubeUrl: strYoutube,
        ingredients: ingredients
    }
}