import React from 'react'

import Contact from '../components/landing/Contact'
import Layout from '../components/common/Layout'
import About from '../components/landing/About'
import { SEO } from '../components/common/SEO'
import Team from '../components/landing/Team'

export default () => (
  <Layout>
    <SEO />
    <About />
    <Team />
    <Contact />
  </Layout>
)
