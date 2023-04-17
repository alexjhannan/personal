import React from 'react'
import styled from 'styled-components'

import Layout from '~components/layout'
import SEO from '~components/seo'

const Heading = styled.h3`
  margin: 24px 0;
  text-align: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>
      {
        'Oh no! The page you requested doesn\'t exist.'
      }
    </Heading>
  </Layout>
)

export default NotFoundPage
