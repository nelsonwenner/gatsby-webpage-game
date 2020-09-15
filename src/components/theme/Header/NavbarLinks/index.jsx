import React from 'react';

import { useProvider } from '../../../../providers/Provider';
import { NavMenu, NavItem, NavLinks } from './styles';

const NavbarLinks = () => {
  const {toggleSidebar} = useProvider();
  
  return (  
    <NavMenu click={ toggleSidebar }>
      <NavItem>
        <NavLinks href="#home">
          Home
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks href="#about">
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks href="#team">
          Team
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks href="#contact">
          Contact
        </NavLinks>
      </NavItem>
    </NavMenu>
  )
}

export default NavbarLinks;