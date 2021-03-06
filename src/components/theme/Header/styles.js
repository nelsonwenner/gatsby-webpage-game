import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 8rem;
  background: #181818;
  transition: all 0.3s ease;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &.sticky {
    height: 7rem;
    background: rgb(16, 16, 16);
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.75);
  }

  &.sticky div ul {
    top: 7rem;
    background: rgb(16, 16, 16);
  }
`
