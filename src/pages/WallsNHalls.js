import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Walls 'n' Halls </h1>

    <p>
      This was the final project for a video game programming class that I took
      during my time at Washington University in St. Louis. I worked
      collabortatively alongside an interdisciplinary team of 3 other students,
      two of which were engineers and one of which was a graphic designer.
    </p>
    <p>
      For the project, we built a retro-style video game wherein a dragon
      escapes a dungeon setting. There were 4 levels in total, each increasing
      in difficulty as the game progressed.
    </p>

    <h2> technologies used </h2>
    <ul>
      <li>
        Unity
      </li>
      <li>
        C Sharp
      </li>
      <li>
        Adobe Illustrator
      </li>
    </ul>

  </div>
)

export default IndexPage
