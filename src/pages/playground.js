import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { shape } from 'prop-types'

import Layout from '~components/layout'
import SEO from '~components/seo'
import { Grid, Card, CardTitle } from '~components/card-grid'

const Heading = styled.h1`
  margin: 24px 0;
  text-align: center;
`

const Image = styled(Img)`
  border-radius: 4px;
  height: 100%;
`

const TOYS = [{
  path: '/gooey-radial-button',
  title: 'SVG Radial Button',
  imageKey: 'radialButtonImage',
  desc: `
    The goeey SVG technique combines a blur filter and a contrast filter
    for a unique web UI effect. I used this to create a radial button
    out of SVGs that goop into each other. Play around with it here.
  `,
}, {
  path: '/explosion',
  title: 'Time-Bound Explosion',
  imageKey: 'explosionImage',
  desc: `
    A simple SVG animation hooked up to a timeline controller.
  `,
}, {
  path: '/web-dev-credits',
  title: 'Zoom-In Credits',
  imageKey: 'webDevImage',
  desc: `
    Some play around the idea of animating an SVG's viewbox.
  `,
}]

const Playground = ({ data }) => (
  <Layout>
    <SEO title="Playground" />
    <Heading>Playground</Heading>
    <Grid>
      {TOYS.map(toy => (
        <Card key={toy.title}>
          <Link to={toy.path}>
            <Image fluid={data[toy.imageKey].childImageSharp.fluid} />
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
  }
`

export default Playground
