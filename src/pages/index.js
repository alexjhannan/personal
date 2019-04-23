import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TimelineMax } from 'gsap'

import Layout, { BodyWrapper } from '~components/layout'
import SEO from '~components/seo'
import UnderConstruction from '~components/graphics/under-construction'

const SECTIONS = [
  {
    header: 'Tools and Concepts',
    links: [
      { to: '/guitar', title: 'Guitar Scale Map' },
      { to: '/color-palette', title: 'Site Color Palette' },
    ],
  },
  {
    header: 'Animation Playground',
    links: [
      { to: '/explosion-play', title: 'Explosion' },
      { to: '/web-dev-credits', title: 'Web Dev Credits' },
    ],
  },
  {
    header: 'More Profiles of Alex',
    links: [
      { to: 'https://www.github.com/alexjhannan', title: 'Github' },
      { to: 'https://www.linkedin.com/in/alexjhannan', title: 'LinkedIn' },
    ],
  },
  {
    header: 'Misc. Inspirations',
    links: [
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
    ],
  },
]

const ListHeader = styled.h3`
  margin: 1.45rem 0 0;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
`

const ListItem = styled.li`
  margin: 0;
`

const EntryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`

const LinkList = ({ header, links }) => (
  <>
    <ListHeader>
      {header}
    </ListHeader>
    <List>
      {links.map(({ to, title }) => (
        <ListItem key={title}>
          {/^http/.test(to) ? (
            <a href={to} target="_blank" rel="noopener noreferrer">{title}</a>
          ) : (
            <Link to={to}>{title}</Link>
          )}
        </ListItem>
      ))}
    </List>
  </>
)

LinkList.propTypes = {
  header: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

const IndexPage = () => {
  useEffect(() => {
    const tl = new TimelineMax({})
    tl.set('#entry-overlay', { pointerEvents: 'none' }, 1)
    return () => tl.kill()
  })
  return (
    <Layout theme="fullwidth">
      <SEO title="Home" keywords={['react', 'developer', 'brooklyn']} />
      <EntryOverlay id="entry-overlay">
        <UnderConstruction />
      </EntryOverlay>
      <BodyWrapper>
        { SECTIONS.map(sectionProps => (
          <LinkList key={sectionProps.header} {...sectionProps} />
        ))}
      </BodyWrapper>
    </Layout>
  )
}

export default IndexPage
