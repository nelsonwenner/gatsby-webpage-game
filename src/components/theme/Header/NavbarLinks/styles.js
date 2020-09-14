import styled from 'styled-components';
import { Link } from 'gatsby';

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media only screen and (max-width:960px) { 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 7rem;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #2B2C33;
  }
`

export const NavItem = styled.li`
  height: 7rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #FFC149;
  }

  @media only screen and (max-width:960px) { 
    width: 100%;

    &:hover {
      border: none;
    } 
  }
`

export const NavLinks = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem 1rem;
  color: #fff;
  font-size: 1.8rem;

  @media only screen and (max-width:960px) { 
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #FFC149;
      transition: all 0.3s ease;
    }
  }
`

