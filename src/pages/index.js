import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'

const IndexPage = () => (
  <div  className="Landing">
    <div id="rightHead">
      <img src={rightHead} />
    </div>
    <div className="Summary">
      <h2> developer </h2>
      <h2> ui/ux designer </h2>
      <h2> filmmaker </h2>
      <h2> long-walk-on-the-beach taker </h2>
    </div>
    <div id="leftHead">
      <img src={leftHead} />
    </div>
  </div>
)

export default IndexPage
