import React from 'react'
import Link from 'gatsby-link'
import './header.css'

import logo from '../assets/logo-header.jpg'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <img src={logo} />
    <Link to="/"> WORK </Link>
    <Link to="/about"> ABOUT </Link>
  </div>
)

export default Header
