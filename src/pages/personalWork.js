import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'
import '../layouts/personalWorkLayout.css'

import mountain from '../assets/Personal_Projects/mountain.png'
import forever from '../assets/Personal_Projects/forever.png'
import yeezy from '../assets/Personal_Projects/yeezy350tailgate.png'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Personal Work </h1>

    <div className="personalWorkContent">
      <div className="personalWorkImg">
        <h3> yeezy </h3>
        <img src={yeezy} />
        <p> unreleased color: "tailgate" </p>
      </div>

      <div className="personalWorkImg">
        <h3> forever </h3>
        <img src={forever} />
        <p> it's the chinese character for forever </p>
      </div>

      <div className="personalWorkImg">
        <h3> the man who moves a mountain </h3>
        <img src={mountain} />
        <p> Photo by Joshua Earle on Unsplash </p>
      </div>
    </div>

  </div>
)

export default IndexPage
