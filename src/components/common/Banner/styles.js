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

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Heading = styled.h1`
  font-size: min(10.5rem, 12vw);
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f2f2f2;
`

export const Subtitle = styled.h1`
  font-size: min(6rem, 9vw);
  line-height: 1.1;
  font-weight: 600;
  color: #f2f2f2;
`

export const Description = styled.p`
  font-size: min(2rem, 4vw);
  margin-top: 0.8rem;
  margin-bottom: 3.5rem;
  line-height: 2rem;
  color: #f2f2f2;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 375px) {
    width: 90%;
  }
`

export const Logo = styled.img`
  width: 100%;
  display: inline-block;
  vertical-align: middle;
`
