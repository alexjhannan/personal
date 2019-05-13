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
    I was looking for a reference tool that mapped out
    notes on a guitar fretboard in a given scale. I couldn't find one
    online that fit what I wanted — so I built one.
    This tool is coded with hand-written SVGs
    that are fully responsive across all viewports.
    I also had a bit of fun adding a radial menu button
    to handle the two-tier UI interaction of selecting a scale and a key.`,
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
