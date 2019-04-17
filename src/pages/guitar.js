
import React from 'react'

import Layout from '~components/Layout'
import SEO from '~components/SEO'
import Guitar from '~components/Guitar'

const IndexPage = () => (
  <Layout>
    <SEO title="Guitar Tool" keywords={['react', 'guitar']} />
    <Guitar />
  </Layout>
)

export default IndexPage
