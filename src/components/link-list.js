import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { shape, arrayOf, string } from 'prop-types'

const ListHeader = styled.h3`
  margin: 1rem 0 0.5rem;
`

const List = styled.ul`
  margin: 16px 16px;
`

const ListItem = styled.li`
  margin: 0;
  width: fit-content;
  &:hover {
    color: var(--color-highlight);
  }
`

const LinkList = ({ header, links }) => (
  <div>
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
  </div>
)

LinkList.propTypes = {
  header: string.isRequired,
  links: arrayOf(
    shape({
      to: string.isRequired,
      title: string.isRequired,
    }),
  ).isRequired,
}


export default LinkList
