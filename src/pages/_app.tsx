import React from 'react'
import Head from 'next/head'
import { MealContextProvider } from '../contexts/MealContext';
import { MealListContextProvider } from '../contexts/MealListContext'
import { SearchContextProvider } from '../contexts/SearchContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Dev.l&iacute;cias</title>
    </Head>
    <MealContextProvider>
    <MealListContextProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </MealListContextProvider>
      </MealContextProvider>
      </>
  )
}

export default MyApp
