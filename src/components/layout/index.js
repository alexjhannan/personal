import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
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

const Poser = posed.div({
  preEnter: { filter: 'blur(10px)', opacity: 0 },
  enter: { filter: 'blur(0px)', opacity: 1 },
  exit: { filter: 'blur(10px)', opacity: 0 },
})

const Layout = ({ children }) => (
  <Container>
    <Header />
    <PoseGroup>
      <Poser key={children.key}>
        <main>
          {children}
        </main>
      </Poser>
    </PoseGroup>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
