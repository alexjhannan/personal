import React from 'react'

import Layout from '~components/layout'
import SEO from '~components/seo'
import Guitar from '~components/guitar'

const GuitarPage = () => (
  <Layout>
    <SEO title="Guitar Tool" keywords={['react', 'guitar']} />
    <Guitar />
  </Layout>
)

export default GuitarPage
