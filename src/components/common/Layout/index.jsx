import React from 'react';
import './fonts.css';
import './styles.css';

import { Provider } from '../../../providers/Provider';
import { Header, Footer } from '../../theme';
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
      <Footer />
    </Provider>
  )
}

export default Layout;