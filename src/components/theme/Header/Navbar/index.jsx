import React,{ useState } from 'react';
import { Link } from 'gatsby';

import Logo from '../../../../assets/logo.svg';
import { Container } from 'react-system-grid';
import Hamburger from '../Hamburger';
import { Wrapper, Nav, LogoIcon } from './styles';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handlerClick = () => setClick(!click);
  
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Link to="/">
            <LogoIcon>
              <img src={ Logo } alt="logo"></img>
            </LogoIcon>
          </Link>
          <Hamburger 
            isClicked={ click } 
            onClick={ handlerClick }
          />
        </Nav> 
      </Container>
    </Wrapper>
  )
}

export default Navbar;