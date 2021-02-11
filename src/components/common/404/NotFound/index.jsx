import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'react-system-grid'
import { SEO } from '../../SEO'

export default () => (
  <Container>
    <SEO title="404: Not found" location="/404" />
    <h1>404 PAGE NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go Back Home</Link>
  </Container>
)
