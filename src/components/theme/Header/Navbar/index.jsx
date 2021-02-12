import React from 'react'
import { Link } from 'gatsby'

import { Nav, Brand, Logo } from './styles'
import logo from '../../../../assets/images/logo.svg'
import { Container } from 'react-system-grid'
import NavbarLinks from '../NavbarLinks'
import Hamburger from '../Hamburger'

const Navbar = () => {
  return (
    <Nav as={Container} className="anime-section anime-down-5">
      <Brand as={Link} to="/">
        <Logo src={logo} alt="logo" />
      </Brand>
      <NavbarLinks />
      <Hamburger />
    </Nav>
  )
}

export default Navbar
