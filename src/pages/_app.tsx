import React from 'react'
import { MealListContextProvider } from '../contexts/MealListContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MealListContextProvider>
      <Component {...pageProps} />
    </MealListContextProvider>
  )
}

export default MyApp
