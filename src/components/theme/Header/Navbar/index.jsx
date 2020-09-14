import React from 'react';
import { Link } from 'gatsby';

import Logo from '../../../../assets/logo.svg';
import { Container } from 'react-system-grid';
import { Wrapper, Brand } from './styles';
import NavbarLinks from '../NavbarLinks';

const Navbar = () => {  
  return (
    <Wrapper as={ Container }>
      <Brand as={ Link } to="/" >
        <img src={ Logo } alt="logo"/>
      </Brand>
      <NavbarLinks />
    </Wrapper> 
  )
}

export default Navbar;