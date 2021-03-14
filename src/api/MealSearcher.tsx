
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