import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-height: 160rem;
  min-height: 80rem;
  padding-bottom: 6rem;
  overflow: hidden;
  background: #181818;
`

export const CardWrapper = styled.div`
  display: grid;
  gap: 10rem;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  margin-top: 3.2rem;

  @media screen and (max-width: 999px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Card = styled.div`
  padding: 3.2rem;
  border-radius: 0.4rem;
  background-color: #f2f2f2;
  text-align: center;
`

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  margin-bottom: 1rem;
  border-radius: 100%;
`

export const TitleCard = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  color: #181818;
`

export const Role = styled.p`
  font-size: 1.8rem;
  color: #181818;
  margin-bottom: 0.8rem;
`

export const SocialLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1.6rem;
`

export const Link = styled.li`
  display: block;
  cursor: pointer;
  padding-bottom: 0.8rem;
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`

export const Description = styled.p`
  color: #181818;
`