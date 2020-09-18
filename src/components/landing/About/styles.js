import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 160rem;
  min-height: 96rem;
  overflow: hidden;
  padding-bottom: 6rem;
  background: #181818;
`

export const ImgWrapper = styled.div`
  width: 90%;
  height: 100%;
  padding-top: 14rem;
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

export const TextWrapper = styled.div`
  max-width: 54rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    text-align: start;
  }
`;

export const Sinopse = styled.div`
  position: relative;
  font-size: 2.5rem;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #F2F2F2;
`;

export const Pipe = styled.div`
  position: relative;
  width: 10%;
  padding: 0.2rem;
  margin-top: 0.5rem;
  background-color: #FFC149;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 45%;
    padding: 0.2rem;
    margin-top: 0.6rem;
    background-color: #FFC149;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  line-height: 1;
  margin-top: 2.6rem;
  color: #F2F2F2;
`;