import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Location } from '@reach/router'
import BaseSVG from '~components/base-svg'
import './reset.css'

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
  > path {
    transition: opacity 0.3s ease-in;
  }
`

const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Header = () => {
  const dividerIndex = Math.floor(Math.random() * HEADER_DIVIDER_SHAPES.length)
  return (
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
        {HEADER_DIVIDER_SHAPES.map((shapePath, i) => (
          <path
            key={shapePath.slice(10)}
            d={shapePath}
            fill="var(--color-inverse)"
            opacity={i === dividerIndex ? 1 : 0} />
        ))}
      </HeaderDivider>
    </StyledHeader>
  )
}

export default Header
