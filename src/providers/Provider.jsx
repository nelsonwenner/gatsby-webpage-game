import React, { createContext, useContext, useState, useEffect } from 'react';

const ProviderContext = createContext();
export const useProvider = () => useContext(ProviderContext);

export const Provider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const handlerClick = () => setToggleSidebar(!toggleSidebar);
  
  useEffect(() => {
    const animeLeft = document.querySelector('.anime-left');
    const animeRight = document.querySelector('.anime-right');

    animeLeft.classList.add('anime-start');  
    animeRight.classList.add('anime-start');
  }, [])
  
  useEffect(() => {
    const animes = document.querySelectorAll('.anime-section');

    if (window.screen.width <= 635) {
      animes.forEach(anime => {
        anime.classList.replace('anime-left', 'anime-start');
        anime.classList.replace('anime-right', 'anime-start');
      });
    }
  
    const observer = new IntersectionObserver((entries) => {
      
      entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('anime-start');
        } 
        else if (entry.boundingClientRect.y > 0) {
          entry.target.classList.remove('anime-start');
        }
      });
    })
    
    animes.forEach(anime => {
      observer.observe(anime);
    });

  }, [])
  
  return (
    <ProviderContext.Provider value={ {toggleSidebar, handlerClick} }>
      { children }
    </ProviderContext.Provider>
  )
}