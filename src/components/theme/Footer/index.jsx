import React from 'react';

import {
  InfoContainer,
  Wrapper,
  Social,
  Grow
} from './styles';

import github from '../../../assets/footer/github-white.svg';
import gatsby from '../../../assets/footer/gatsby.svg';
import vercel from '../../../assets/footer/vercel.svg';

export const Footer = () => {
  return (
    <Wrapper >
      <InfoContainer>
        © 
        2020-{`${new Date().getFullYear()} `}
        Build 
        with 
        <Social
          target="_blank"
          rel="noopener noreferrer"
          href={ 'https://www.gatsbyjs.com' }
        >
          <Grow src={gatsby} width="20" height="20" />
        </Social>
        Open
        Sourced
        on
        <Social
          target="_blank"
          rel="noopener noreferrer"
          href={ 'https://github.com/nelsonwenner/gatsby-webpage-game' }
        >
          <Grow src={github} width="20" height="20" />
        </Social>
        and
        deployed
        on
        <Social
          target="_blank"
          rel="noopener noreferrer"
          href={ 'https://vercel.com' }
        >
          <Grow src={vercel} width="20" height="20" />
        </Social>
      </InfoContainer>
    </Wrapper>
  )
}
