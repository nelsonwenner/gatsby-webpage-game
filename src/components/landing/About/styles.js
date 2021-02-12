import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-height: 160rem;
  min-height: 96rem;
  overflow: hidden;
  padding-bottom: 6rem;
  background: #181818;
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 5rem;
  flex-direction: row;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};

  @media screen and (max-width: 960px) {
    width: 70%;
  }
`

export const Logo = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`

export const TextWrapper = styled.div`
  max-width: 54rem;
  width: 100%;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`

export const Sinopse = styled.div`
  position: relative;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #f2f2f2;
`

export const Pipe = styled.div`
  position: relative;
  width: 10%;
  padding: 0.2rem;
  margin-top: 0.5rem;
  background-color: #ffc149;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 45%;
    padding: 0.2rem;
    margin-top: 0.6rem;
    background-color: #ffc149;
  }
`

export const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1;
  margin-top: 2.6rem;
  color: #f2f2f2;
`
