import React from 'react'

import Hamburger from './Hamburger';
import { Wrapper } from './styles';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hamburger />
    </Wrapper>
  )
}