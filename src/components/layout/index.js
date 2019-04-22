import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Location } from '@reach/router'
import { getRandomElement } from '~utilities'
import './reset.css'

const StyledHeader = styled.header`
  filter: invert(100%);
  background: var(--color-primary);
  color: var(--color-offblack);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: reative;
  height: 60px;

  & > * {
    position: relative;
  }
`

const HeaderDivider = styled.svg`
  z-index: -1;
  width: 100%;
  height: 25px;
  position: absolute;
  top: 100%;
`

const StyledMain = styled.main`
  flex: 1;
`

export const BodyWrapper = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  ${(props) => {
    if (props.theme !== 'fullwidth') {
      return `
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
  margin-top: 1rem;
  text-decoration: none;
  transition: transform 0.5s ease-out;
  will-change: transform;
  &:hover {
    transform: scale(1.1);
  }
`

const HEADER_DIVIDER_SHAPES = [
  // 'M0,0 L50,100 L100,0',
  // 'M0,0 L12.5,100, L25,0, L37.5,100, L50,0 L62.5,100, L75,0, L87.5,100, L100,0',
  'M0,0 C0 100,100 100,100 0',
  'M0,0 C25 50,75 50, 100 0',
]

const Layout = ({ children, theme }) => (
  <>
    <StyledHeader>
      <h3>alex hannan</h3>
      <h6>(.com)</h6>
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
        viewBox="0 0 100 100"
        width="100vw"
        height="200px"
        preserveAspectRatio="none"
      >
        <path d={getRandomElement(HEADER_DIVIDER_SHAPES)} fill="var(--color-primary)" strokeLinjoin="round" />
      </HeaderDivider>
    </StyledHeader>
    <StyledMain>
      <BodyWrapper theme={theme}>
        {children}
      </BodyWrapper>
    </StyledMain>
  </>
)

Layout.defaultProps = {
  theme: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
}

export default Layout
