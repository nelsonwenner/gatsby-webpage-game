import React from 'react';
import './styles';

import { 
  Wrapper,  
  CardWrapper,
  Card,
  Avatar,
  TitleCard,
  Role,
  SocialLinks,
  Link,
  Icon,
  Description
} from './styles';

import github from '../../../assets/github.svg';
import { Container } from 'react-system-grid';
import { Title } from '../../common/Title';
import data from './data';

const Team = () => {
  return (
    <Wrapper id="team">
      <Container>
        <Title className="anime-section anime-30-left">
          Team
        </Title>
        <CardWrapper className="anime-section anime-up">
          {data.map((item, index) => (
            <Card key={ index } >
              <Avatar src={ item.avatar } alt="avatar" />
              <TitleCard>
                { item.name }
              </TitleCard>
              <Role>
                { item.role }
              </Role>
              <SocialLinks>
                <Link>
                  <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={ item.link } 
                  >
                    <Icon src={ github } />
                  </a>
                </Link>
              </SocialLinks>
              <Description>
                { item.description }
              </Description>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  )
}

export default Team;