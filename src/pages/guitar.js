import React from 'react'
import styled from 'styled-components'

import Layout from '~components/layout'
import SEO from '~components/seo'
import Guitar from '~components/guitar'

const Container = styled.div`
  margin-top: 48px;
`

const IndexPage = () => (
  <Layout theme="fullwidth">
    <SEO title="Guitar Tool" keywords={['react', 'guitar']} />
    <Container>
      <Guitar />
    </Container>
  </Layout>
)

export default IndexPage
