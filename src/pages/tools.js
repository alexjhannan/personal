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

const FakeImg = styled.div`
  background: var(--color-iGrey2);
  width: 100%;
  height: 100%;
`

const TOOLS = [{
  path: '/guitar',
  title: 'Guitar Notes',
  imageKey: 'guitarImage',
  desc: `
    An SVG guitar reference for visualizing special scales.
  `,
}, {
  path: '/color-palette',
  title: 'Color Palette',
  imageKey: 'colorPaletteImage',
  desc: `
    Every site needs a color palette.
  `,
}]

const Tools = ({ data }) => (
  <Layout>
    <SEO title="Tools" />
    <Heading>Tools</Heading>
    <Grid>
      {TOOLS.map(tool => (
        <Card key={tool.title}>
          <Link to={tool.path}>
            <Image fluid={data[tool.imageKey].childImageSharp.fluid} />
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

Tools.propTypes = {
  data: shape({}).isRequired,
}

export const query = graphql`
  query {
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
