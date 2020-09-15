import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 50rem;
  padding: 20rem 0;
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
`;

export const Heading = styled.h1`
  font-size: 9rem;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #F2F2F2;

  @media screen and (max-width: 768px) {
    font-size: 6.4rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 5rem;
  }
`;

export const Subtitle = styled.h1`
  font-size: 6rem;
  line-height: 1.1;
  font-weight: 600;
  color: #F2F2F2;

  @media screen and (max-width: 768px) {
    font-size: 4.6rem;
  }

  @media screen and (max-width: 375px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  max-width: 50rem;
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 3.5rem;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #F2F2F2;
`;

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
`;

export const Logo = styled.img`
  width: 100%;
  display: inline-block;
  vertical-align: middle;
`;