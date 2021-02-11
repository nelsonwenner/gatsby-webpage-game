import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 8rem;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #181818;
  }
`

export const NavItem = styled.li`
  height: 7rem;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ffc149;
  }

  @media only screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`

export const NavLinks = styled(AnchorLink)`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.2rem 1rem;
  color: #f2f2f2;
  font-size: 1.8rem;

  @media only screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;

    &:hover {
      color: #ffc149;
      transition: all 0.3s ease;
    }
  }
`
