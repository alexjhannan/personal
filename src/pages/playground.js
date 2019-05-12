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

const TOYS = [{
  path: '/explosion',
  title: 'Time-Traveling Explosion',
  desc: 'Yadda yadda',
}, {
  path: '/web-dev-credits',
  title: 'Zoom-In Credits',
  desc: 'Yadda yadda',
}, {
  path: '/gooey-radial-button',
  title: 'SVG Radial Button',
  desc: 'Yadda yadda',
}]

const Playground = () => (
  <Layout>
    <SEO title="Playground" />
    <Heading>Playground</Heading>
    <Grid>
      {TOYS.map(toy => (
        <Card key={toy.title}>
          <Link to={toy.path}>
            <FakeImg />
          </Link>
          <div>
            <h5>{toy.title}</h5>
            <p>{toy.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

export default Playground
