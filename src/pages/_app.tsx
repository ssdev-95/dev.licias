import { MealDetailsModalContextProvider } from '../contexts/MealDetailsModalContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MealDetailsModalContextProvider >
      <Component {...pageProps} />
    </MealDetailsModalContextProvider>
  )
}

export default MyApp
