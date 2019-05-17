import React from 'react'
import styled from 'styled-components'

import SEO from '~components/seo'

const Heading = styled.h3`
  margin: 24px 0;
`

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Heading>
      {
        'Oh no! The page you requested doesn\'t exist.'
      }
    </Heading>
  </>
)

export default NotFoundPage
