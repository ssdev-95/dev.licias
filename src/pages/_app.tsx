import React from 'react'
import { MealContextProvider } from '../contexts/MealContext';
import { MealListContextProvider } from '../contexts/MealListContext'
import { SearchContextProvider } from '../contexts/SearchContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MealContextProvider>
    <MealListContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </MealListContextProvider>
      </MealContextProvider>
  )
}

export default MyApp
