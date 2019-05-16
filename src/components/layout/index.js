import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import './reset.css'

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 128px 1fr;
  grid-template-columns: 1fr;
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
`

const GridMain = styled.main`
  width: 100vw;
  ${props => (props.theme !== 'fullwidth' ? 'padding: 0 var(--layout-gutter-width);' : '')}
`

const Layout = ({ children, theme }) => (
  <Container theme={theme}>
    <Header />
    <GridMain theme={theme}>
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
