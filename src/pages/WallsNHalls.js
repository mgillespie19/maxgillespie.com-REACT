import React from 'react'
import Link from 'gatsby-link'

import img1 from '../assets/WallsNHalls/1.png'
import img2 from '../assets/WallsNHalls/2.png'
import img3 from '../assets/WallsNHalls/3.png'
import img4 from '../assets/WallsNHalls/4.png'
import img5 from '../assets/WallsNHalls/5.png'

import '../layouts/workLayout.css'
import '../layouts/WallsNHalls.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Walls 'n' Halls </h1>

    <div className="Details">
      <p>
        This was the final project for a video game programming class that I took
        during my time at Washington University in St. Louis. I worked
        collabortatively alongside an interdisciplinary team of 3 other students,
        two of which were engineers and one of which was a graphic designer.
      </p>

      <img src={img1} />
      <img src={img2} />

      <p>
        For the project, we built a retro-style video game wherein a dragon
        escapes a dungeon setting. There were 4 levels in total, each increasing
        in difficulty as the game progressed.
      </p>

      <ul>
        <h2> technologies used </h2>
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

      <img src={img4} />
      <img src={img3} />
      <img src={img5} />


    </div>
  </div>
)

export default IndexPage
