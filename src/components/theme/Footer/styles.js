import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
  font-size: 1.8rem;
  background: rgb(16, 16, 16);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
`
export const InfoContainer = styled.div`
 margin-bottom: 1rem;
`

export const Social = styled.a`
  position:relative;
  top: 0.3rem;
  margin: 0 0.6rem;
`

export const Grow = styled.img`
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`