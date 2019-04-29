import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from './header'
import './reset.css'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledMain = styled.div`
  flex: 1;
`

export const BodyWrapper = styled.div`
  margin: 0 auto;
  ${(props) => {
    if (props.theme !== 'fullwidth') {
      return `
        padding: 48px 0 24px;
        @media (max-width: 600px) {
          max-width: 90vw;
        }
        @media (max-width: 1080px) {
          max-width: 80vw;
        }
        @media (min-width: 1081px) {
          max-width: 65vw;
        }
      `
    }
    return ''
  }}
`

const Layout = ({ children, theme }) => (
  <Container>
    <Header />
    <StyledMain>
      <BodyWrapper theme={theme}>
        {children}
      </BodyWrapper>
    </StyledMain>
  </Container>
)

Layout.defaultProps = {
  theme: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
}

export default Layout
