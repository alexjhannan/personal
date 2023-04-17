import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

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

const BodyContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
`

const AboutHeader = styled.h3`
  margin: 1rem 0 0.5rem;
`

const AboutContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  margin: 48px var(--layout-gutter-width);
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
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
  margin: 16px 0 0;
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
const IndexPage = () => (
  <>
    <SEO title="Home" keywords={['react', 'developer', 'brooklyn']} />
    <GraphicContainer>
      <GraphicWrapper>
        <UnderConstruction />
      </GraphicWrapper>
    </GraphicContainer>
    <BodyContainer>
      <StaticImage
        src="../images/prospect-park.jpg"
        alt="a landscape photo of Propset Park"
        imgStyle={{filter: 'grayscale(0.7)' }}
        style={{ position: 'absolute', height: '100%' }}
        />
      <AboutContainer>
        <TextContainer>
          <AboutHeader>About Adasah</AboutHeader>
          <p>
            {`
              Adasah is a senior software engineer living in Brooklyn. Forever a student, they were first trained
              as a natural scientist, graduating from Temple University with a B.S. in Physics.
              Adasah applied their technical know-how as an undergraduate researcher and as a high school STEM teacher
              before turning their expertise on themself and learning the ins and outs of modern web development.
              Since then, Adasah has worked with teams ranging from tiny to huge, including at Codecademy,
              Teachers Pay Teachers, Bonterra, Broadway.com, and others. Most recently, Adasah
              worked at Bonterra to refresh their Agile processes, implement a system to expose tech debt concerns,
              and bootstrap a project to rebuild their most wired-shut web forms to support better accessibility.
            `}
          </p>
          <br />
          <p>
            {`
              Outside of their professional life, Adasah is constantly expanding their interests.
              Of late they've been learning about self-relational psychology, the Tarot, invisible design,
              yoga, and songwriting. A true generalist, Adasah is most themself when connecting together
              disparate concepts into intuitive patterns.
            `}
          </p>
          <IconContainer>
            <IconAnchor href="https://www.github.com/dassidas" rel="noopener noreferrer" target="_blank">
              <StyledGithubIcon />
            </IconAnchor>
            <IconAnchor href="https://www.linkedin.com/in/dassagol" rel="noopener noreferrer" target="_blank">
              <StyledLinkedinIcon />
            </IconAnchor>
          </IconContainer>
        </TextContainer>
      </AboutContainer>
      <ImageLabel>
        Prospect Park, Brooklyn - May 2019
      </ImageLabel>
    </BodyContainer>
  </>
)

export default IndexPage
