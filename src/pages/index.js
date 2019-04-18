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
