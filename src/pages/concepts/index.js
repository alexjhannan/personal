import React from 'react'
import Layout from '~components/layout'
import SEO from '~components/seo'
import {
  GutterWrapper,
  Heading,
  HeadingContainer,
} from '~components/misc-page-comps'
import LinkList from '~components/link-list'

const Concepts = () => (
  <Layout>
    <GutterWrapper>
      <SEO title="Concepts" />
      <HeadingContainer>
        <Heading>Concepts</Heading>
      </HeadingContainer>
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
            title: 'Frontend Masters: Modern JavaScript Workshops',
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
  </Layout>
)

export default Concepts
