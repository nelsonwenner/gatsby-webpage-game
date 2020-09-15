import React from 'react';
import './fonts.css';
import './styles.css';

import { Provider } from '../../../providers/Provider';
import { Header } from '../../theme';
import { Wrapper } from './styles';
import Banner from '../Banner';

const Layout = ({ children }) => {
  return (
    <Provider>
      <Header />
      <Banner />
      <Wrapper>
        { children }
      </Wrapper>
    </Provider>
  )
}

export default Layout;