import React from 'react';

import { useProvider } from '../../../../providers/Provider';
import { HamburgerWrapper } from './styles';

const Hamburger = () => {
  const { toggleSidebar, handlerClick } = useProvider();

  return (
    <HamburgerWrapper 
      className={`${ (toggleSidebar && 'motion') }`}
      onClick={ handlerClick }
    /> 
  )
}

export default Hamburger;