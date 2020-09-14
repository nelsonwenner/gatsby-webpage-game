import React from 'react';
import './styles.css';

import { Provider } from '../../providers/Provider';
import { Header } from '../../theme';
import { Wrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <Provider>
      <Header />
      <Wrapper>
        { children }
      </Wrapper>
    </Provider>
  )
}

export default Layout;