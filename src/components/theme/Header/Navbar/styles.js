import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1299px) {
    padding: 0 2rem;
  }
`

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
`

export const Logo = styled.img`
  width: auto;
`
