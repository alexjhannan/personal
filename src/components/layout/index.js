import React from 'react'
import { bool, node } from 'prop-types'
import styled from 'styled-components'
import Themer from './themer'
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

const Main = styled.main`
  width: 100vw;
`

const Layout = ({ children, homePage }) => (
  <Themer>
    <Container>
      <Header homePage={homePage} />
      <Main>
        {children}
      </Main>
    </Container>
  </Themer>
)

Layout.propTypes = {
  children: node.isRequired,
  homePage: bool,
}

Layout.defaultProps = {
  homePage: false,
}

export default Layout
