import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { mode } from "../utils/colorMode"

const Header = ({ siteTitle }) => (
  <header
    style={{
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
      <h1
        style={{
          margin: 0,
          fontWeight: "300",
        }}
      >
        <Link
          to="/"
          style={{
            color: mode("black", "white"),
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
