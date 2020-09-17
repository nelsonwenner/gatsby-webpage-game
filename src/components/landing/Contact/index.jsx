import React from 'react';

import {
  Wrapper,
  FormWrapper,
  InputWrapper,
  Input,
  Label,
  TextArea,
  TextAreaWrapper,
  ImgWrapper,
  Logo
} from './styles';

import email from '../../../assets/email.svg';
import { Container } from 'react-system-grid';
import { Title } from '../../common/Title';
import { Column } from '../../common/Column';
import { Row } from '../../common/Row';

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container className="anime-section anime-up">
        <Title>
          Contact
        </Title>
        <Row>
          <Column>
            <FormWrapper>
              <InputWrapper>
                <Label>Full name</Label>
                <Input />
              </InputWrapper>
              <InputWrapper>
                <Label>Your email</Label>
                <Input />
              </InputWrapper>
              <TextAreaWrapper>
                <Label>Message</Label>
                <TextArea />
              </TextAreaWrapper>
            </FormWrapper>
          </Column>
          <Column>
            <ImgWrapper>
              <Logo src={ email } alt="email" />
            </ImgWrapper>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Contact;