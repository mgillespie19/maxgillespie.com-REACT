import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'

const IndexPage = () => (
  <div className="Page">
    <div  className="Landing">
      <div id="rightHead">
        <img src={rightHead} />
      </div>

      <div className="Summary">
        <h1> developer </h1>
        <h1> ui/ux designer </h1>
        <h1> filmmaker </h1>
        <h1> long-walk-on-the-beach taker </h1>
      </div>
      
      <div id="leftHead">
        <img src={leftHead} />
      </div>
    </div>
    <div className="Work">
      <div className="Example1">
        <h1> Work </h1>
      </div>

      <div className="Example1">
        <h1> coming </h1>
      </div>

      <div className="Example1">
        <h1> soon! </h1>
      </div>

    </div>
  </div>
)

export default IndexPage
