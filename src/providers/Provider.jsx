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
  
  return (
    <ProviderContext.Provider value={ {toggleSidebar, handlerClick} }>
      { children }
    </ProviderContext.Provider>
  )
}