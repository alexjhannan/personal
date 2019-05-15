import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Location } from '@reach/router'
import './reset.css'
import { string } from 'prop-types'

const StyledHeader = styled.header`
  background: var(--color-inverse);
  color: var(--color-iGrey0);
  display: grid;
  padding: 0 calc( var(--layout-gutter-width) / 2);
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr;
  }
`

const LeftColumn = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`

const RightColumn = styled(LeftColumn)`
  justify-content: flex-end;
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`

const NavLink = styled(Link)`
  position: relative;
  &:not(:last-of-type) {
    margin-right: 32px;
    &::after {
      content: '*';
      position: absolute;
      right: -12px;
      top: 67%;
      width: 0;
      line-height: 0;
      pointer-events: none;
      opacity: 0.7;
    }
  }
`

const DisplayText = styled.h1`
  font-family: var(--display-font-stack);
`

const Header = ({ className }) => (
  <StyledHeader className={className}>
    <LeftColumn>
      <Location>
        {({ location }) => (
          <>
            { location.pathname === '/' ? (
              <DisplayText>Alex Hannan</DisplayText>
            ) : (
              <Link to="/">
                <DisplayText>Alex Hannan</DisplayText>
              </Link>
            )}
          </>
        )}
      </Location>
    </LeftColumn>
    <RightColumn>
      <NavLink to="/tools">
        <h4>Tools</h4>
      </NavLink>
      <NavLink to="/playground">
        <h4>Playground</h4>
      </NavLink>
      <NavLink to="/concepts">
        <h4>Concepts</h4>
      </NavLink>
    </RightColumn>
  </StyledHeader>
)

Header.propTypes = {
  className: string,
}

Header.defaultProps = {
  className: '',
}

export default Header
