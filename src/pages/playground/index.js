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

const TOYS = [{
  path: '/playground/gooey-radial-button',
  title: 'SVG Radial Button',
  imageKey: 'radial-button',
  desc: `
    The goeey SVG technique combines a blur filter and a contrast filter
    for a unique web UI effect. I used this to create a radial button
    out of SVGs that goop into each other. Play around with it here.
  `,
}, {
  path: '/playground/explosion',
  title: 'Time-Bound Explosion',
  imageKey: 'explosion',
  desc: `
    A simple SVG animation hooked up to a timeline controller.
  `,
}]

const Playground = () => (
  <Layout>
    <GutterWrapper>
      <SEO title="Playground" />
      <HeadingContainer>
        <HeadingImage src={`../../images/subway-slug.png`} imgStyle={{ objectFit: 'contain' }} />
        <Heading>Playground</Heading>
        <HeadingImage src={`../../images/subway-slug.png`} imgStyle={{ objectFit: 'contain' }} />
      </HeadingContainer>
      <Grid>
        {TOYS.map(toy => (
          <Card key={toy.title}>
            <CardImageLink to={toy.path}>
              <CardImage src={`../../images/${toy.imageKey}.png`} />
            </CardImageLink>
            <div>
              <CardTitle>{toy.title}</CardTitle>
              <p>{toy.desc}</p>
            </div>
          </Card>
        ))}
      </Grid>
    </GutterWrapper>
  </Layout>
)

export default Playground
