import React from 'react';

import {
  Wrapper
} from './styles';

import { Container } from 'react-system-grid';
import { Title } from '../../common/Title';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Title>
          Contact
        </Title>
      </Container>
    </Wrapper>
  )
}

export default Contact;