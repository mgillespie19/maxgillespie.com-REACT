import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'
import '../layouts/mavenLayout.css'

import tabletImage from '../assets/Maven/mavenimg4.png'
import screen1 from '../assets/Maven/screen1.png'
import screen2 from '../assets/Maven/screen2.png'
import screen3 from '../assets/Maven/screen3.png'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Maven Machines </h1>

    <p>
    Maven is a startup in Pittsburgh, Pennsylvania that
    makes asset tracking software for the transportation industry.
    I worked with Maven during the summer of 2019 as an Android
    Devloper.
    </p>
    <p>
    I maintained and built new features within the
    codebase for their app that services thousands of truck
    drivers and dispatchers daily."
    </p>

    <div className='mavenDetailImages1'>
      <img src={tabletImage} />
    </div>

    <h2> responsibilities </h2>
    <ul>
      <li>
        Worked in an agile development environment on the Android Application team
      </li>
      <li> Wrote scalable software in Kotlin and Java </li>
      <li>
        Built multiple new product features that were released to thousands
        of drivers across multiple fleets
      </li>
      <li>
        Part of team that honed release strategy that catered to multiple
        enterprise-level clients
      </li>
      <li>
        Improved overall ability to function as mission-critical software
        through bug fixes and UI/UX improvements
      </li>
    </ul>

    <div className='mavenDetailImages2'>
      <img src={screen1} />
      <img src={screen2} />
      <img src={screen3} />
    </div>

    <h2> technologies used </h2>
    <ul>
      <li>
        Android Studio
      </li>
      <li>
        Java
      </li>
      <li>
        Kotlin
      </li>
    </ul>

  </div>
)

export default IndexPage
