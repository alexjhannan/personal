import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { getRandomElement } from '~utilities'
import BaseSVG from '~components/base-svg'
import './reset.css'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const StyledHeader = styled.header`
  background: var(--color-inverse);
  color: var(--color-iGrey0);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin-bottom: -24px;
  padding-top: 12px;
  position: relative;
`

const HeaderDivider = styled(BaseSVG)`
  width: 100%;
  height: 24px;
  position: absolute;
  top: 100%;
  fill: var(--color-inverse);
`

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledLink = styled(Link)`
  margin-top: 0.25rem;
  text-decoration: none;
  transition: transform 0.5s ease-out;
  will-change: transform;
  color: var(--color-iGrey0);
  margin-left: 5rem;
  &:hover {
    transform: scale(1.1);
  }
`

const HEADER_DIVIDER_SHAPES = [
  'M0,0 L50,75 L100,0',
  'M0,0 L12.5,75, L25,50, L37.5,75, L50,50 L62.5,75, L75,50, L87.5,75, L100,0',
  'M0,0 C0 100,100 100,100 0',
  'M0,0 C25 50,75 50, 100 0',
]

const Layout = ({ children, theme }) => (
  <Container>
    <StyledHeader>
      <HeaderColumn>
        <h3>alex hannan</h3>
        <h6>(.com)</h6>
      </HeaderColumn>
      <Location>
        {({ location }) => (
          <>
            { location.pathname !== '/' && (
              <StyledLink to="/">
                <h6>back to home</h6>
              </StyledLink>
            )}
          </>
        )}
      </Location>
      <HeaderDivider
        id="header-divider"
        title="Header Divider"
        viewBox="0 0 100 100"
        width="100vw"
        height="200px"
        preserveAspectRatio="none">
        <path d={getRandomElement(HEADER_DIVIDER_SHAPES)} fill="var(--color-inverse)" />
      </HeaderDivider>
    </StyledHeader>
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
