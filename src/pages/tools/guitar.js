import React from 'react'

import Layout from '~components/layout'
import SEO from '~components/seo'
import Guitar from '~components/guitar'

const IndexPage = () => (
  <Layout theme="fullwidth">
    <SEO title="Guitar Tool" keywords={['react', 'guitar']} />
    <Guitar />
  </Layout>
)

export default IndexPage
