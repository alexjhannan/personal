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
  justify-content: space-around;
  align-items: center;
  height: 60px;
  margin-bottom: -24px;

  & > * {
    position: relative;
  }
`

const HeaderDivider = styled.svg`
  z-index: -1;
  width: 100%;
  height: 24px;
  position: absolute;
  top: 100%;
`

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const StyledMain = styled.main`
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
  <>
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
        viewBox="0 0 100 100"
        width="100vw"
        height="200px"
        preserveAspectRatio="none">
        <path d={getRandomElement(HEADER_DIVIDER_SHAPES)} fill="var(--color-primary)" />
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
