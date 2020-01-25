import React from 'react'
import Link from 'gatsby-link'

import whiteBoard1 from '../assets/RunTracker/whiteboard.png'
import icon from '../assets/RunTracker/app icon.png'
import '../layouts/workLayout.css'
import '../layouts/runTracker.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <div className="runTrackerHeaderLayout">
        <div>
        <h1> Run Tracker </h1>

        <h2> inspiration </h2>
        <p>
          Run Tracker is a project for a class where students break into
          teams and are expected to publish an application on the app store.
        </p>
        <p>
          I'm in a group with 2 other students who are on the track team at WashU,
          and they've noticed a probelm with the website they're currently using
          to log their workouts. After looking at the site, we decided we can
          build something better.
        </p>
      </div>

      <img id="runTrackerIcon" className="threeQuartersImage" src={icon} />
    </div>

    <h2> what is it? </h2>
    <p>
      An app that allows running teams and invidiuals to easily track and log
      runs while building a community with other users: either both teammates
      and independent runners!
    </p>

    <h2> brainstorming </h2>

    <h3> concept development </h3>
    <p>
      We want a platform that can begin as a tool for teams to log workouts and
      help support each other, but which can grow into something more than that:
      a place for athletes to build a community of people striving to be better
      every day.
    </p>

    <h3> brand identity </h3>


    <h3> wireframes </h3>
    <img className="oneHalfImage" src={whiteBoard1} />

    <h2> technologies used </h2>
    <ul>
      <li>
        XCode
      </li>
      <li>
        SwiftUI, Swift
      </li>
      <li>
        Amazon AWS, Amazon Amplify
      </li>
      <li>
        Adobe Illustrator
      </li>
    </ul>
  </div>
)

export default IndexPage
