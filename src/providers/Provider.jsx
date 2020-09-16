import React, { createContext, useContext, useState, useEffect } from 'react';

const ProviderContext = createContext();
export const useProvider = () => useContext(ProviderContext);

export const Provider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const handlerClick = () => setToggleSidebar(!toggleSidebar);
  
  useEffect(() => {
    const effectLeft = document.querySelector('.effect-entry-left');
    const effectRight = document.querySelector('.effect-entry-right');
    
    effectLeft.style.opacity = '1';
    effectLeft.style.transform = 'translateX(0px)';
    effectLeft.style.transition = '1s ease-in-out';

    effectRight.style.opacity = '1';
    effectRight.style.transform = 'translateX(0px)';
    effectRight.style.transition = '1s ease-in-out';
  }, [])

  return (
    <ProviderContext.Provider value={ {toggleSidebar, handlerClick} }>
      { children }
    </ProviderContext.Provider>
  )
}