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
  @media (min-width: 900px) {
    max-width: 30vw;
  }
`

const AboutHeader = styled.h3`
  margin: 1rem 0 0.5rem;
`

const BodyWrapper = styled.div`
  padding-left: var(--layout-gutter-width);
  @media (min-width: 900px) {
    max-width: 650px;
  }
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
      <AboutHeader>About</AboutHeader>
      <p>
        Alex is a web developer living in Brooklyn. Trained as a natural scientist,
        he taught himself how to code, bootstrapped himself into a career in technology,
        and has been building cutting-edge React applications for NY startups for the past
        three years. Most recently, Alex worked at Getaway House, where he rebuilt
        most of their customer-facing application with entirely new styles and improved frontend tooling.
      </p>
      <LinkList
        header="Other Profiles"
        links={[
          { to: 'https://www.github.com/alexjhannan', title: 'Alex\'s Github' },
          { to: 'https://www.linkedin.com/in/alexjhannan', title: 'Alex\'s LinkedIn' },
        ]} />
    </BodyWrapper>
  </Layout>
)

export default IndexPage
