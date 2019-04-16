import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import "./reset.css"

const LAYOUT_WIDTH = '960px'
const LAYOUT_PADDING = '0px 1.0875rem'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  filter: invert(100%);
  background: indianred;
  margin-bottom: 1.45rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  color: inherit;
  box-shadow: 0 0 8px 2px black;
`

const StyledMain = styled.main`
  flex: 1;
`

const StyledFooter = styled.footer`
  padding: 1rem;
  filter: invert(100%);
  background-color: indianred;
  box-shadow: 0 -12px 8px 2px black;
  text-align: center;
`

const ContentWrapper = styled.div`
  max-width: ${LAYOUT_WIDTH};
  padding: ${LAYOUT_PADDING};
  margin: 0 auto;
`

const BodyWrapper = styled(ContentWrapper)`
  padding-bottom: 1.45rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.5s ease-out;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
`

const Layout = ({ children }) => (
  <AppWrapper>
    <StyledHeader>
      <StyledLink to="/">
        <h6>back to home</h6>
      </StyledLink>
    </StyledHeader>
    <StyledMain>
      <BodyWrapper>
        {children}
      </BodyWrapper>
    </StyledMain>
    <StyledFooter>
      <ContentWrapper>
        <h5>Built with love in BK</h5>
      </ContentWrapper>
    </StyledFooter>
  </AppWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
