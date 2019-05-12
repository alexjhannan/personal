import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '~components/layout'
import SEO from '~components/seo'
import { Grid, Card } from '~components/card-grid'

const Heading = styled.h1`
  margin: 24px 0;
  text-align: center;
`

const FakeImg = styled.div`
  background: var(--color-iGrey2);
  width: 100%;
  height: 100%;
`

const IDEAS = []

const Concepts = () => (
  <Layout>
    <SEO title="Concepts" />
    <Heading>Concepts</Heading>
    <Grid>
      {IDEAS.map(idea => (
        <Card key={idea.title}>
          <Link to={idea.path}>
            <FakeImg />
          </Link>
          <div>
            <h5>{idea.title}</h5>
            <p>{idea.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
    <p style={{ textAlign: 'center' }}>Hmm, it looks like Alex needs to do some thinking.</p>
  </Layout>
)

export default Concepts
