import React from 'react'
import styled from 'styled-components'

import Layout from '~components/layout'
import SEO from '~components/seo'
import UnderConstruction from '~components/graphics/under-construction'
import LinkList from '~components/link-list'

const GraphicContainer = styled.div`
  background: black;
`

const GraphicWrapper = styled.div`
  max-width: 50vw;
  margin: 0 auto;
  padding: 48px 0;
`

const AboutHeader = styled.h3`
  margin: 1rem 0 0.5rem;
`

const BodyWrapper = styled.div`
  padding: 0 var(--layout-gutter-width);
`

const IndexPage = () => (
  <Layout theme="fullwidth">
    <SEO title="Home" keywords={['react', 'developer', 'brooklyn']} />
    <GraphicContainer>
      <GraphicWrapper>
        <UnderConstruction />
      </GraphicWrapper>
    </GraphicContainer>
    <BodyWrapper>
      <AboutHeader>About Me</AboutHeader>
      <p>
        Alex is a web developer living in Brooklyn. Trained as a natural scientist,
        he taught himself how to code, bootstrapped himself into a career in technology,
        and has been building cutting-edge React applications for NY startups for the past
        three years. From JavaScript to Ruby, yoga to kickboxing, or transcendental meditation
        to self-relational psychology, Alex is into a bit of just about anything.
      </p>
      <LinkList
        header="Looking for more of me?"
        links={[
          { to: 'https://www.github.com/alexjhannan', title: 'My Github' },
          { to: 'https://www.linkedin.com/in/alexjhannan', title: 'My LinkedIn' },
        ]} />
    </BodyWrapper>
  </Layout>
)

export default IndexPage
