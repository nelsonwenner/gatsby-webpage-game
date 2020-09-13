import React from 'react';
import './styles.css';

import { Header } from '../../theme';
import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        { children }
      </Wrapper>
    </>
  )
}

export default Layout;