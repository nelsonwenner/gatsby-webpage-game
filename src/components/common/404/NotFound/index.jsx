import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'react-system-grid';
import { Center } from './styles'

export default () => (
  <Center textAlign="center" pt={6} pb={6} as={Container}>
    <h1>404 PAGE NOT FOUND</h1>
    <Link to="/">Go Back Home</Link>
  </Center>
)