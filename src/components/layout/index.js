import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import './reset.css'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 128px 1fr 128px;
  grid-template-columns: var(--layout-gutter-width) 1fr var(--layout-gutter-width);
  @media (max-width: 600px) {
    --layout-gutter-width: 24px;
  }
  @media (min-width: 601px) and (max-width: 900px) {
    --layout-gutter-width: 64px;
  }
  @media (min-width: 901px) and (max-width: 1280px) {
    --layout-gutter-width: 128px;
  }
  @media (min-width: 1281px) {
    --layout-gutter-width: 256px;
  }
  ${(props) => {
    if (props.theme === 'fullwidth') {
      return `
        grid-template-areas:
          "header header header"
          "main main main";
      `
    }
    return `
      grid-template-areas:
        "header header header"
        ". main .";
    `
  }}
`

const GridMain = styled.main`
  grid-area: main;
`

const GridHeader = styled(Header)`
  grid-area: header;
`

const Layout = ({ children, theme }) => (
  <Container theme={theme}>
    <GridHeader />
    <GridMain>
      {children}
    </GridMain>
  </Container>
)

Layout.defaultProps = {
  theme: 'gutters',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['gutters', 'fullwidth']),
}

export default Layout
