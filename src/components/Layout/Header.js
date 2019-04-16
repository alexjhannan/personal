import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import HomeIcon from "@components/Icons/Home"


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `indianred`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <HomeIcon onClick={() => { navigate('/guitar') }} width="40" />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
