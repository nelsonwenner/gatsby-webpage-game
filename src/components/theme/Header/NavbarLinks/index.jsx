import React from 'react';

import { useProvider } from '../../../providers/Provider';
import { NavMenu, NavItem, NavLinks } from './styles';

const NavbarLinks = () => {
  const {toggleSidebar} = useProvider();
  
  return (  
    <NavMenu click={ toggleSidebar }>
      <NavItem>
        <NavLinks to="/">
          Home
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="/about">
          About
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="/team">
          Team
        </NavLinks>
      </NavItem>
      <NavItem>
        <NavLinks to="/contact">
          Contact
        </NavLinks>
      </NavItem>
    </NavMenu>
  )
}

export default NavbarLinks;