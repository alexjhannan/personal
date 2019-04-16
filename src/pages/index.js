import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "@components/Layout"
import SEO from "@components/SEO"

const Header = styled.h1`
  margin: 1.45rem 0;
`

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

const ANIMATION_LINKS = [
  { to: '/explosion-play', title: 'Explosion' },
  { to: '/web-dev-credits', title: 'Web Dev Credits' },
]

const TOOL_LINKS = [
  { to: '/guitar', title: 'Guitar' },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`react`, `developer`, `brooklyn`]} />
    <Header>alex hannan</Header>
    <ListHeader>Animations:</ListHeader>
    <List>
      {ANIMATION_LINKS.map(({ to, title }) => (
        <ListItem key={title}>
          <Link to={to}>{title}</Link>
        </ListItem>
      ))}
    </List>
    <ListHeader>Tools:</ListHeader>
    <List>
      {TOOL_LINKS.map(({ to, title }) => (
        <ListItem key={title}>
          <Link to={to}>{title}</Link>
        </ListItem>
      ))}
    </List>
  </Layout>
)

export default IndexPage
