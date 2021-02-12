import React from 'react'

import {
  Wrapper,
  FormWrapper,
  InputWrapper,
  Input,
  Label,
  TextArea,
  TextAreaWrapper,
  ImgWrapper,
  Logo,
  Button,
} from './styles'

import email from '../../../assets/images/email.svg'
import { Container } from 'react-system-grid'
import { Column } from '../../common/Column'
import { Title } from '../../common/Title'
import { Row } from '../../common/Row'

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Container>
        <Title className="anime-section anime-left-15">Contact</Title>
        <Row>
          <Column>
            <FormWrapper className="anime-section anime-up-15">
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
              <Button>Send</Button>
            </FormWrapper>
          </Column>
          <Column>
            <ImgWrapper className="anime-section anime-right-15">
              <Logo src={email} alt="email" />
            </ImgWrapper>
          </Column>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Contact
