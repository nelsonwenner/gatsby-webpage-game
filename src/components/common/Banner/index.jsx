import React from 'react'

import {
  Wrapper,
  TextWrapper,
  Heading,
  Subtitle,
  Description,
  ImgWrapper,
  Logo,
} from './styles'

import logoPerson from '../../../assets/images/logo-person.svg'
import { Container } from 'react-system-grid'
import { Column } from '../Column'
import { Row } from '../Row'

const Banner = () => {
  return (
    <Wrapper id="home">
      <Container>
        <Row>
          <Column>
            <TextWrapper className="anime-section anime-left-15 anime-color">
              <Heading >Breaking</Heading>
              <Subtitle>Artificial Society</Subtitle>
              <Description>
                The human being was destroyed himself with his desire for
                destructive conquests. But this world must last, artificial
                society must fall and the new characteristic of humanity must be
                hope and the struggle for good.
              </Description>
            </TextWrapper>
          </Column>
          <Column>
            <ImgWrapper start="true" className="anime-section anime-up-15">
              <Logo src={logoPerson} alt="logo" />
            </ImgWrapper>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Banner
