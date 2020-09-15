import React, { createContext, useContext, useState } from 'react';

const ProviderContext = createContext();
export const useProvider = () => useContext(ProviderContext);

export const Provider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  
  const handlerClick = () => setToggleSidebar(!toggleSidebar);

  return (
    <ProviderContext.Provider value={ {toggleSidebar, handlerClick} }>
      { children }
    </ProviderContext.Provider>
  )
}