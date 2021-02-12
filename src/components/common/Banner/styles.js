import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15rem 0;
  overflow: hidden;
  background: #181818;

  display: flex;
  flex-direction: row;
`

export const TextWrapper = styled.div`
  max-width: 54rem;
  width: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 360px) {
    margin-top: 3rem;
  }
`

export const Heading = styled.h1`
  /* clamp (minimum, desirable, maximum) */
  font-size: clamp(5rem, 1rem + 15vw, 10rem);
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  background: linear-gradient(285.44deg, #f2b43d 8.3%, #4474e4 86.39%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Subtitle = styled.h1`
  font-size: clamp(3rem, 1rem + 9vw, 6rem);
  line-height: 1.1;
  font-weight: 600;
  background: linear-gradient(285.44deg, #f2b43d 8.3%, #4474e4 86.39%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const Description = styled.p`
  font-size: clamp(1rem, 1rem + 9vw, 2rem);
  margin-top: 0.8rem;
  margin-bottom: 3.5rem;
  line-height: 2rem;
  color: #c5c5c5;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 960px) {
    width: 70%;
  }

  @media screen and (max-width: 360px) {
    display: none;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  height: auto;
`
