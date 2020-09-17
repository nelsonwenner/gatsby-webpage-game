import React from 'react';
import './styles';

import { 
  Wrapper,  
  CardWrapper,
  Card 
} from './styles';

import { Container } from 'react-system-grid';
import { Title } from '../../common/Title';

const Team = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          Team
        </Title>
        <CardWrapper>
          <Card>
          </Card>
          <Card>
          </Card>
        </CardWrapper>
      </Container>
    </Wrapper>
  )
}

export default Team;