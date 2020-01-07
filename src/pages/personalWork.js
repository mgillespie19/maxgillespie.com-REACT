import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'
import '../layouts/personalWorkLayout.css'

import mountain from '../assets/Personal_Projects/mountain.png'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Personal Work </h1>

    <div className="personalWorkImg">
      <h3> the man who moves a mountain </h3>
      <img src={mountain} />
      <p> Photo by Joshua Earle on Unsplash </p>
    </div>

  </div>
)

export default IndexPage
