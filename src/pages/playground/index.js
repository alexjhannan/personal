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

// Annoyingly, trying to load a static image from inside of an object (here, imagePath)
// results in it being considered a dynamic image and having to mess with Gatsby's GraphQL image lookup.
// So, I'm going to un-DRY this code to avoid figuring out that overly-complex syntax again...
// const TOYS = [{
//   path: '/playground/gooey-radial-button',
//   title: 'SVG Radial Button',
//   imagePath: '../../images/radial-button.png',
//   desc: `
//     The goeey SVG technique combines a blur filter and a contrast filter
//     for a unique web UI effect. I used this to create a radial button
//     out of SVGs that goop into each other. Play around with it here.
//   `,
// }, {
//   path: '/playground/explosion',
//   title: 'Time-Bound Explosion',
//   imagePath: '../../images/explosion.png',
//   desc: `
//     A simple SVG animation hooked up to a timeline controller.
//   `,
// }];


const Playground = () => (
  <Layout>
    <GutterWrapper>
      <SEO title="Playground" />
      <HeadingContainer>
        <Heading>Playground</Heading>
      </HeadingContainer>
      <Grid>
        <Card>
          <CardImageLink to='/playground/gooey-radial-button'>
            <StaticImage src="../../images/radial-button.png" alt="A screenshot of the SVG Radial Button" />
          </CardImageLink>
          <div>
            <CardTitle>SVG Radial Button</CardTitle>
            <p>
              The goeey SVG technique combines a blur filter and a contrast filter
              for a unique web UI effect. I used this to create a radial button
              out of SVGs that goop into each other. Play around with it here.
            </p>
          </div>
        </Card>
        <Card>
          <CardImageLink to='/playground/explosion'>
            <StaticImage src="../../images/explosion.png" alt="A screenshot of the Time-Bound Explosion" />
          </CardImageLink>
          <div>
            <CardTitle>Time-Bound Explosion</CardTitle>
            <p>
              A simple SVG animation hooked up to a timeline controller.
            </p>
          </div>
        </Card>
        {/* {TOYS.map(toy => (
          <Card key={toy.title}>
            <CardImageLink to={toy.path}>
              <GatsbyImage src={`../../images/${toy.imagePath}.png`} alt={`A screenshot of the ${toy.title}`} />
            </CardImageLink>
            <div>
              <CardTitle>{toy.title}</CardTitle>
              <p>{toy.desc}</p>
            </div>
          </Card>
        ))} */}
      </Grid>
    </GutterWrapper>
  </Layout>
)

export default Playground
