import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import BgImg from 'gatsby-background-image'
import { shape } from 'prop-types'

import Layout from '~components/layout'
import SEO from '~components/seo'
import UnderConstruction from '~components/graphics/under-construction'
import GithubIcon from '~components/graphics/github-icon'
import LinkedinIcon from '~components/graphics/linkedin-icon'

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

const AboutContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  min-height: 100vh;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const BackgroundImage = styled(BgImg)`
  filter: grayscale(0.7);
  padding: 48px var(--layout-gutter-width);
`

const TextContainer = styled.div`
  background-color: hsla(0,0%,5%,0.8);
  padding: 24px;
  border-radius: 4px;
  height: min-content;
`

const ImageLabel = styled.span`
  position: absolute;
  font-family: var(--serif-font-stack);
  bottom: 2px;
  right: 16px;
  font-size: 12px;
  @media (max-width: 600px) {
    display: none;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin 16px 0 0;
`

const IconAnchor = styled.a`
  display: inline-block;
  width: 32px;
  &:not(:last-of-type) {
    margin-right: 16px;
  }
  opacity: 0.7;
  transition: opacity 0.3s ease-in;
  &:hover {
    opacity: 1;
  }
  pointer-events: none;
`

const StyledGithubIcon = styled(GithubIcon)`
  pointer-events: all;
`

const StyledLinkedinIcon = styled(LinkedinIcon)`
  pointer-events: all;
`

const IndexPage = ({ data }) => (
  <Layout theme="fullwidth">
    <SEO title="Home" keywords={['react', 'developer', 'brooklyn']} />
    <GraphicContainer>
      <GraphicWrapper>
        <UnderConstruction />
      </GraphicWrapper>
    </GraphicContainer>
    <BackgroundImage fluid={data.prospectPark.childImageSharp.fluid} imgStyle={{ objectFit: 'contain' }}>
      <AboutContainer>
        <TextContainer>
          <AboutHeader>About Me</AboutHeader>
          <p>
            {`
              Alex is a web developer living in Brooklyn. Forever a student, he was first trained
              as a natural scientist, graduating from Temple University with a B.S. in Physics.
              Alex applied his technical know-how as an undergraduate researcher and as a high school STEM teacher
              before turning his expertise on himself and learning the ins and outs of modern web development.
              Since then, Alex has been building cutting-edge React applications for NY-based startups,
              contributing to the teams at Codecademy and Teachers Pay Teachers. Most recently, Alex
              rebuilt most of Getaway House's customer-facing web application, complete with
              an upgrade to Gatsby, new and improved design tooling, and several new conversion features.
            `}
          </p>
          <br />
          <p>
            {`
              Outside of his professional life, Alex is constantly expanding his interests.
              Of late, he's been learning about self-relational psychology, the Tarot, invisible design,
              yoga, and the creative process. A true generalist, Alex is most himself when connecting together
              disparate concepts into intuitive patterns.
            `}
          </p>
          <IconContainer>
            <IconAnchor href="https://www.github.com/alexjhannan" rel="noopener noreferrer">
              <StyledGithubIcon />
            </IconAnchor>
            <IconAnchor href="https://www.linkedin.com/in/alexjhannan" rel="noopener noreferrer">
              <StyledLinkedinIcon />
            </IconAnchor>
          </IconContainer>
        </TextContainer>
      </AboutContainer>
      <ImageLabel>
        Prospect Park, Brooklyn - May 2019
      </ImageLabel>
    </BackgroundImage>
  </Layout>
)

IndexPage.propTypes = {
  data: shape({}).isRequired,
}

export const query = graphql`
  query {
    prospectPark: file(relativePath: { eq: "prospect-park.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
