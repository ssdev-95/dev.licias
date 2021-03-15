import React, { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import MealList from '../components/MealList';
import Meal from '../components/Meal';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [screenWidth, setScreenWidth] = useState(0)

  const toggleMenu = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(()=>{
    setScreenWidth(window.innerWidth)
  },[])

  useEffect(()=>{
    screenWidth>800?setIsMenuVisible(true):setIsMenuVisible(false)
  }, [screenWidth])
  
  return (
    <div className={styles.container}>
      
          {
          (isMenuVisible)?(
          <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.rotateTop}></div>
          <div className={styles.rotateBot}></div>
          </div>
          ):(
          <div className={styles.burger} onClick={toggleMenu}>
          <div className={styles.rectTop}></div>
          <div className={styles.rectMid}></div>
          <div className={styles.rectBot}></div>
          </div>)
      
        }
      <nav className={styles.navbar}>
        <img src="icons/food_icon.png" alt="Food icon"/>
      </nav>
      {isMenuVisible&&(<aside className={styles.filters}>
        <Filters />
      </aside>)}
      <section className={styles.mealsList}>
        <Meal/>
      </section>
      {isMenuVisible&&(<section className={styles.search}>
        <MealList />
      </section>)}
      <footer></footer>
    </div>
  )
}
