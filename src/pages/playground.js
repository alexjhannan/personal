import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '~components/layout'
import SEO from '~components/seo'
import { Grid, Card, CardTitle } from '~components/card-grid'

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
  path: '/gooey-radial-button',
  title: 'SVG Radial Button',
  desc: `
    The goeey SVG technique combines a blur filter and a contrast filter
    for a unique web UI effect. I used this to create a radial button
    out of SVGs that goop into each other. Play around with it here.
  `,
}, {
  path: '/explosion',
  title: 'Time-Bound Explosion',
  desc: `
    A simple SVG animation hooked up to a timeline controller.
  `,
}, {
  path: '/web-dev-credits',
  title: 'Zoom-In Credits',
  desc: `
    Some play around the idea of animating an SVG's viewbox.
  `,
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
            <CardTitle>{toy.title}</CardTitle>
            <p>{toy.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

export default Playground
