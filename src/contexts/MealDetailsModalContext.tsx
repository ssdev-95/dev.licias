import React, { createContext, ReactNode, useState } from 'react';

interface MealDetailsModalContextData {
    isModalOpen: boolean;
    toggleModalOpen: (params) => void
}

interface MealDetailsModalContextProviderProps {
    children: ReactNode;
}

export const MealDetailsModalContext = createContext({} as MealDetailsModalContextData)

export function MealDetailsModalContextProvider({children}: MealDetailsModalContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const toggleModalOpen = (event) => {
      window.addEventListener('click', ()=>{
          event.preventDefault()
      })

      setIsModalOpen(!isModalOpen)
  }
  
    return (
        <MealDetailsModalContext.Provider value= {{ 
            isModalOpen,
            toggleModalOpen    
        }} >
            {children}
        </MealDetailsModalContext.Provider>
    )
}