import React from 'react'

import Layout from '~components/layout'
import SEO from '~components/seo'
import {
  GutterWrapper,
  Grid,
  Card,
  CardTitle,
  CardImageLink,
  CardImage,
  Heading,
  HeadingContainer,
  HeadingImage,
} from '~components/misc-page-comps'

const TOOLS = [{
  path: '/tools/guitar',
  title: 'Guitar Notes',
  imageKey: 'guitar-tool',
  desc: `
    An SVG guitar reference for visualizing special scales.
  `,
}, {
  path: '/tools/color-palette',
  title: 'Color Palette',
  imageKey: 'color-palette',
  desc: `
    Every site needs a color palette. This one can be played with.
  `,
}]

const Tools = () => (
  <Layout>
    <GutterWrapper>
      <SEO title="Tools" />
      <HeadingContainer>
        <HeadingImage src="../../images/tweeting-bird.png" imgStyle={{ objectFit: 'contain' }} alt="a bird singing on a branch" />
        <Heading>Tools</Heading>
        <HeadingImage src="../../images/tweeting-bird.png" imgStyle={{ objectFit: 'contain' }} alt="a bird singing on a branch" />
      </HeadingContainer>
      <Grid>
        {TOOLS.map(tool => (
          <Card key={tool.title}>
            <CardImageLink to={tool.path}>
              <CardImage src={`../../images/${tool.imageKey}.png`} />
            </CardImageLink>
            <div>
              <CardTitle>{tool.title}</CardTitle>
              <p>{tool.desc}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </GutterWrapper>
  </Layout>
)

export default Tools
