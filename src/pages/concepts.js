import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '~components/layout'
import SEO from '~components/seo'
import { Grid, Card, CardTitle } from '~components/card-grid'
import LinkList from '~components/link-list'

const Heading = styled.h1`
  margin: 24px 0;
  text-align: center;
`

const FakeImg = styled.div`
  background: var(--color-iGrey2);
  width: 100%;
  height: 100%;
`

const IDEAS = []

const Concepts = () => (
  <Layout>
    <SEO title="Concepts" />
    <Heading>Concepts</Heading>
    <Grid>
      {IDEAS.map(idea => (
        <Card key={idea.title}>
          <Link to={idea.path}>
            <FakeImg />
          </Link>
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
  </Layout>
)

export default Concepts
