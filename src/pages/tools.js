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

const TOOLS = [{
  path: '/guitar',
  title: 'Guitar Notes',
  desc: `
    An SVG guitar reference for visualizing special scales.
  `,
}, {
  path: '/color-palette',
  title: 'Color Palette',
  desc: `
    Every site needs a color palette.
  `,
}]

const Tools = () => (
  <Layout>
    <SEO title="Tools" />
    <Heading>Tools</Heading>
    <Grid>
      {TOOLS.map(tool => (
        <Card key={tool.title}>
          <Link to={tool.path}>
            <FakeImg />
          </Link>
          <div>
            <CardTitle>{tool.title}</CardTitle>
            <p>{tool.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

export default Tools
