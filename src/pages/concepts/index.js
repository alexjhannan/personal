import React from 'react'
// import { graphql } from 'gatsby'

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
import LinkList from '~components/link-list'
// import { shape } from 'prop-types'

const IDEAS = []

const Concepts = () => (
  <GutterWrapper>
    <SEO title="Concepts" />
    <HeadingContainer>
      <HeadingImage src={`../../images/arthur-bone.png`} imgStyle={{ objectFit: 'contain' }} alt="a dog staring at a bone" />
      <Heading>Concepts</Heading>
      <HeadingImage src={`../../images/arthur-bone.png`} imgStyle={{ objectFit: 'contain' }} alt="a dog staring at a bone" />
    </HeadingContainer>
    <Grid>
      {IDEAS.map(idea => (
        <Card key={idea.title}>
          {/* <CardImageLink to={idea.path}>
            <CardImage srcfluid={data[idea.imageKey].childImageSharp.fluid} />
          </CardImageLink> */}
          <div>
            <CardTitle>{idea.title}</CardTitle>
            <p>{idea.desc}</p>
          </div>
        </Card>
      ))}
    </Grid>
    <LinkList
      header="Some Inspirations"
      links={[
        {
          title: 'Broiled Chocolate Chip Cookies',
          to: 'https://www.youtube.com/watch?v=OnGrHD1hRkk',
        },
        {
          title: 'Cracked After Hours: TMNT and Temperamentalism',
          to: 'https://www.youtube.com/watch?v=dtsmluPK7Ug',
        },
        {
          title: 'Simon Sinek: Start With Why',
          to: 'https://www.youtube.com/watch?v=sioZd3AxmnE',
        },
        {
          title: 'This Particularly Epic Prince Solo',
          to: 'https://www.youtube.com/watch?v=6SFNW5F8K9Y',
        },
        {
          title: 'The Kuhn Cycle of Scientific Revolutions',
          to: 'http://www.thwink.org/sustain/glossary/KuhnCycle.htm',
        },
        {
          title: 'Carol Dweck: Fixed / Growth Mindsets',
          to: 'https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/',
        },
        {
          title: 'Frontend Masters - JS Workshops',
          to: 'https://www.frontendmasters.com',
        },
        {
          title: 'Kurt Vonnegut on the Shape of Stories',
          to: 'https://www.youtube.com/watch?v=GOGru_4z1Vc',
        },
        {
          title: 'Jimquisition: The Perfect Pasta Sauce',
          to: 'https://www.youtube.com/watch?v=irZ-159xsZY',
        },
      ]} />
  </GutterWrapper>
)

// Concepts.propTypes = {
//   data: shape({}).isRequired,
// }

// export const query = graphql`
//   query {
//     arthurBone: file(relativePath: { eq: "arthur-bone.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 200) {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `

export default Concepts
