import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './styles'

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
  Description,
} from './styles'

import github from '../../../assets/images/github.svg'
import { Container } from 'react-system-grid'
import { Title } from '../../common/Title'
import data from './data'

const Team = () => {
  const { avatar1, avatar2 } = useStaticQuery(graphql`
    query {
      avatar1: file(relativePath: { eq: "images/avatar01.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avatar2: file(relativePath: { eq: "images/avatar02.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Wrapper id="team">
      <Container>
        <Title className="anime-section anime-left-15">Team</Title>
        <CardWrapper className="anime-section anime-up-15">
          {data(avatar1, avatar2).map((item, index) => (
            <Card key={index}>
              <Avatar
                fluid={item.avatar.childImageSharp.fluid}
                fadeIn
                alt="avatar"
              />
              <TitleCard>{item.name}</TitleCard>
              <Role>{item.role}</Role>
              <SocialLinks>
                <Link>
                  <a target="_blank" rel="noopener noreferrer" href={item.link}>
                    <Icon src={github} />
                  </a>
                </Link>
              </SocialLinks>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </Wrapper>
  )
}

export default Team
