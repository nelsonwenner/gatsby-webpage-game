import styled from 'styled-components'

export const HamburgerWrapper = styled.div`
  position: relative;
  left: 0.8rem;
  z-index: 999;
  width: 5.4rem;
  height: 5rem;
  border-radius: 10%;

  display: none;

  &::before {
    content: '';
    position: absolute;
    top: 30%;
    left: 15%;
    width: 70%;
    height: 12%;
    border-radius: 20px;
    background-color: #fff;
    transition: 1s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 60%;
    left: 45%;
    width: 40%;
    height: 12%;
    border-radius: 20px;
    background-color: #fff;
    transition: 1s ease;
  }

  &.motion::before {
    transform: rotate(225deg);
    width: 70%;
    height: 12%;
    top: 45%;
    left: 15%;
  }

  &.motion::after {
    transform: rotate(-225deg);
    width: 70%;
    height: 12%;
    top: 45%;
    left: 15%;
  }

  @media only screen and (max-width: 960px) {
    display: block;
  }
`
