import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import Layout from '~components/layout'
import SEO from '~components/seo'
import {
  GutterWrapper,
  Grid,
  Card,
  CardTitle,
  CardImageLink,
  Heading,
  HeadingContainer,
} from '~components/misc-page-comps'

// See playground/index.js for an explanation of why these cards aren't being mapped out.
// const TOOLS = [{
//   path: '/tools/guitar',
//   title: 'Guitar Scales',
//   imagePath: '../../images/guitar-tool.png',
//   desc: `
//     An SVG guitar reference for visualizing special scales.
//   `,
// }, {
//   path: '/tools/color-palette',
//   title: 'Color Palette',
//   imagePath: '../../images/color-palette.png',
//   desc: `
//     Every site needs a color palette. This one can be played with.
//   `,
// }]

const Tools = () => (
  <Layout>
    <GutterWrapper>
      <SEO title="Tools" />
      <HeadingContainer>
        <Heading>Tools</Heading>
      </HeadingContainer>
      <Grid>
        <Card>
          <CardImageLink to='/tools/guitar'>
            <StaticImage src='../../images/guitar-tool.png' alt="A screenshot of the Guitar Scales tool" />
          </CardImageLink>
          <div>
            <CardTitle>Guitar Scales</CardTitle>
            <p>An SVG guitar reference for visualizing special scales.</p>
          </div>
        </Card>
        <Card>
          <CardImageLink to='/tools/color-palette'>
            <StaticImage src='../../images/color-palette.png' alt="A screenshot of the Color Palette tool" />
          </CardImageLink>
          <div>
            <CardTitle>Color Palette</CardTitle>
            <p>Every site needs a color palette. This one can be played with.</p>
          </div>
        </Card>
        {/* {TOOLS.map(tool => (
          <Card key={tool.title}>
            <CardImageLink to={tool.path}>
              <StaticImage src={`../../images/${tool.imageKey}.png`} />
            </CardImageLink>
            <div>
              <CardTitle>{tool.title}</CardTitle>
              <p>{tool.desc}</p>
            </div>
          </Card>
        ))} */}
      </Grid>
    </GutterWrapper>
  </Layout>
)

export default Tools
