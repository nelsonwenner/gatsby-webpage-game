import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 8rem;
  padding: 0 3rem;
  position: sticky;
  top: 0;
  z-index: 999;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
`

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
`

export const Logo = styled.img`
  width: auto;
`;