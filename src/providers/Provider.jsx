import React, { createContext, useContext, useState, useEffect } from 'react'

const ProviderContext = createContext()
export const useProvider = () => useContext(ProviderContext)

export const Provider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const handlerClick = () => setToggleSidebar(!toggleSidebar)

  useEffect(() => {
    const animeLeft = document.querySelector('.anime-left-15')
    const animeUp = document.querySelector('.anime-up-15')

    animeLeft.classList.add('anime-start')
    animeUp.classList.add('anime-start')
  }, [])

  useEffect(() => {
    const animes = document.querySelectorAll('.anime-section')

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anime-start')
        } else if (entry.boundingClientRect.y > 0) {
          entry.target.classList.remove('anime-start')
        }
      })
    })

    animes.forEach((anime) => {
      observer.observe(anime)
    })
  }, [])

  return (
    <ProviderContext.Provider value={{ toggleSidebar, handlerClick }}>
      {children}
    </ProviderContext.Provider>
  )
}
