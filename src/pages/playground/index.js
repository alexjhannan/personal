import React from 'react'
import { graphql } from 'gatsby'
import { shape } from 'prop-types'

import Layout from '~components/layout'
import SEO from '~components/seo'
import {
  Grid, Card, CardTitle, CardImageLink, CardImage, Heading, HeadingContainer, HeadingImage,
} from '~components/misc-page-comps'

const TOYS = [{
  path: '/playground/gooey-radial-button',
  title: 'SVG Radial Button',
  imageKey: 'radialButtonImage',
  desc: `
    The goeey SVG technique combines a blur filter and a contrast filter
    for a unique web UI effect. I used this to create a radial button
    out of SVGs that goop into each other. Play around with it here.
  `,
}, {
  path: '/playground/explosion',
  title: 'Time-Bound Explosion',
  imageKey: 'explosionImage',
  desc: `
    A simple SVG animation hooked up to a timeline controller.
  `,
}]

const Playground = ({ data }) => (
  <Layout>
    <SEO title="Playground" />
    <HeadingContainer>
      <HeadingImage fluid={data.subwaySlug.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
      <Heading>Playground</Heading>
      <HeadingImage fluid={data.subwaySlug.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
    </HeadingContainer>
    <Grid>
      {TOYS.map(toy => (
        <Card key={toy.title}>
          <CardImageLink to={toy.path}>
            <CardImage fluid={data[toy.imageKey].childImageSharp.fluid} />
          </CardImageLink>
          <div>
            <CardTitle>{toy.title}</CardTitle>
            <p>{toy.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

Playground.propTypes = {
  data: shape({}).isRequired,
}

export const query = graphql`
  query {
    webDevImage: file(relativePath: { eq: "web-dev-credits.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    radialButtonImage: file(relativePath: { eq: "radial-button.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    explosionImage: file(relativePath: { eq: "explosion.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    subwaySlug: file(relativePath: { eq: "subway-slug.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Playground
