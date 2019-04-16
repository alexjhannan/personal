import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import "./reset.css"

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  filter: invert(100%);
  background: indianred;
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

const BodyWrapper = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 2rem 0;
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
      <h5>Built with love in BK</h5>
    </StyledFooter>
  </AppWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
