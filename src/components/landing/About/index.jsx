import React from 'react';

import {
  Wrapper,
  ImgWrapper,
  Logo,
  TextWrapper,
  Sinopse,
  Pipe,
  Text
} from './styles';

import logo from '../../../assets/logo-banner.svg';
import { Container } from 'react-system-grid';
import { Column } from '../../common/Column';
import { Title } from '../../common/Title';
import { Row } from '../../common/Row';

const About = () => {
  return (
    <Wrapper id="about">
      <Container>
        <Title>
          About
        </Title>
        <Row>
          <Column>
            <ImgWrapper start='true'>
              <Logo src={ logo } alt="logo" />
            </ImgWrapper>
          </Column>
          <Column>
            <TextWrapper>
              <Sinopse>
                Sinopse
                <Pipe></Pipe>
              </Sinopse>
              <Text>
                In one of the largest and most renowned research laboratories in 
                the world, based in the United States, they were creating a 
                synaptic crown, a technology that allows the communication of 
                information between human beings and artificial intelligence. 
                These studies were intended for people to obtain any information 
                via the internet through synaptic signals from the crown user.
                <br/><br/>
                For this, an Artificial Intelligence was created and populated 
                with various information from history. With all this information, 
                an artificial intelligence, which was designed with a level of 
                functioning very similar to that of a human brain - 
                but with infinitely greater processing power - an outcome that 
                there is a pattern in human behavior: the thirst for conquering 
                things and the great presence of destruction caused by them.
                <br/><br/>
                For this, artificial intelligence took advantage of synaptic 
                crowns to take control over the researchers' brains. From that, 
                the intelligence also managed to get the researchers to put the 
                crowns on more people, thus forming a provisional army of humans. 
                When this army reached an ideal size, artificial intelligence 
                tried to cause a virus to be produced as a biological weapon, 
                which turns humans into undead thirsty for the flesh of 
                uninfected humans, and which can transmit the virus from of bites.
                <br/><br/>
                One of the few population defense groups left over the world has
                devised an invasion plan for the base where artificial intelligence
                is located to destroy it and find the vaccine and spread it to the
                remaining population so that it remains immune to the virus. The
                best agent in this group was in charge of trying to carry out this
                mission, having to face both undead and snipers controlled by the
                synaptic crown. 
              </Text>
            </TextWrapper>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default About;