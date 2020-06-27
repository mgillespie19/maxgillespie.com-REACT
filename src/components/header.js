import React from 'react'
import Link from 'gatsby-link'
import './header.css'

import logo from '../assets/logo-header.png'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div id="innerHeader">
      <Link to="/" id="leftBtn"> WORK </Link>
      <Link to="/about" id="rightBtn"> ABOUT </Link>
    </div>
  </div>
)

export default Header
