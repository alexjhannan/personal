import React from 'react'
// import { graphql } from 'gatsby'
import { shape } from 'prop-types'

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
)

// Tools.propTypes = {
//   data: shape({}).isRequired,
// }

// export const query = graphql`
//   query {
//     tweetingBird: file(relativePath: { eq: "tweeting-bird.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 200) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//     guitarImage: file(relativePath: { eq: "guitar-tool.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     colorPaletteImage: file(relativePath: { eq: "color-palette.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 500) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

export default Tools
