import React from 'react';
import { Link } from 'gatsby';

import { Wrapper, Nav, Brand, Logo } from './styles';
import logo from '../../../../assets/logo.svg';
import { Container } from 'react-system-grid';
import NavbarLinks from '../NavbarLinks';
import Hamburger from '../Hamburger';

const Navbar = () => {  
  return (
    <Wrapper>
      <Nav as={ Container }>
        <Brand as={ Link } to="/" >
          <Logo src={ logo } alt="logo"/>
        </Brand>
        <NavbarLinks />
        <Hamburger />
      </Nav>
    </Wrapper> 
  )
}

export default Navbar;