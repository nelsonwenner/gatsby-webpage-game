import React from 'react';
import './styles.css';

import { useProvider } from '../../../providers/Provider';

const Hamburger = () => {
  const { toggleSidebar, handlerClick } = useProvider();

  return (
    <div 
      className={`hamburger ${ (toggleSidebar && 'motion') }`}
      onClick={ handlerClick }
    /> 
  )
}

export default Hamburger;