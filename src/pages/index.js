import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Layout from '~components/Layout'
import SEO from '~components/SEO'

const SECTIONS = [
  {
    header: 'Animations',
    links: [
      { to: '/explosion-play', title: 'Explosion' },
      { to: '/web-dev-credits', title: 'Web Dev Credits' },
    ],
  },
  {
    header: 'Tools',
    links: [
      { to: '/guitar', title: 'Guitar' },
    ],
  },
  {
    header: 'Other Profiles',
    links: [
      { to: 'https://www.github.com/alexjhannan', title: 'Github' },
      { to: 'https://www.linkedin.com/in/alexjhannan', title: 'LinkedIn' },
    ],
  },
  {
    header: 'Miscellaneous Inspiration',
    links: [
      {
        title: 'Cracked After Hours: Which Ninja Turtle Are You?',
        to: 'https://www.youtube.com/embed/dtsmluPK7Ug',
      },
      {
        title: 'Simon Sinek: Start With Why',
        to: 'https://www.youtube.com/embed/sioZd3AxmnE',
      },
      {
        title: 'That one time Prince was way better at guitar than everyone else',
        to: 'https://www.youtube.com/embed/6SFNW5F8K9Y',
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
        title: 'Frontend Masters',
        to: 'https://www.frontendmasters.com',
      },
      {
        title: 'FunFunFunction',
        to: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q',
      },
      {
        title: 'Kurt Vonnegut on the Shape of Stories',
        to: 'https://www.youtube.com/embed/oP3c1h8v2ZQ',
      },
      {
        title: 'Everything is a Remix',
        to: 'https://www.youtube.com/watch?v=NmwwjikTHxw',
      },
      {
        title: 'Jimquisition: The Perfect Pasta Sauce',
        to: 'https://www.youtube.com/embed/irZ-159xsZY',
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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['react', 'developer', 'brooklyn']} />
    { SECTIONS.map(sectionProps => (
      <LinkList key={sectionProps.header} {...sectionProps} />
    ))}
  </Layout>
)

export default IndexPage
