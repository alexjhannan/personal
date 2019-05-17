import React from 'react'
import { graphql } from 'gatsby'
import { shape } from 'prop-types'

import Layout from '~components/layout'
import SEO from '~components/seo'
import {
  Grid, Card, CardTitle, CardImageLink, CardImage, Heading, HeadingContainer, HeadingImage,
} from '~components/misc-page-comps'

const TOOLS = [{
  path: '/tools/guitar',
  title: 'Guitar Notes',
  imageKey: 'guitarImage',
  desc: `
    An SVG guitar reference for visualizing special scales.
  `,
}, {
  path: '/tools/color-palette',
  title: 'Color Palette',
  imageKey: 'colorPaletteImage',
  desc: `
    Every site needs a color palette.
  `,
}]

const Tools = ({ data }) => (
  <Layout>
    <SEO title="Tools" />
    <HeadingContainer>
      <HeadingImage flipped fluid={data.tweetingBird.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
      <Heading>Tools</Heading>
      <HeadingImage flipped fluid={data.tweetingBird.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }} />
    </HeadingContainer>
    <Grid>
      {TOOLS.map(tool => (
        <Card key={tool.title}>
          <CardImageLink to={tool.path}>
            <CardImage fluid={data[tool.imageKey].childImageSharp.fluid} />
          </CardImageLink>
          <div>
            <CardTitle>{tool.title}</CardTitle>
            <p>{tool.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
  </Layout>
)

Tools.propTypes = {
  data: shape({}).isRequired,
}

export const query = graphql`
  query {
    tweetingBird: file(relativePath: { eq: "tweeting-bird.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    guitarImage: file(relativePath: { eq: "guitar-tool.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    colorPaletteImage: file(relativePath: { eq: "color-palette.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Tools
