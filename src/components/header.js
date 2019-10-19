import React from 'react'
import Link from 'gatsby-link'
import './header.css'

const Header = ({ siteTitle }) => (
  <div>
    <Link to="/"> WORK </Link>
    <Link to="/about"> ABOUT </Link>
  </div>
)

export default Header
