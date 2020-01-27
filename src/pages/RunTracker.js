import React from 'react'
import Link from 'gatsby-link'

import whiteBoard1 from '../assets/RunTracker/whiteboard.png'
import icon from '../assets/RunTracker/app icon.png'
import logoDevelopment from '../assets/RunTracker/logo ideation.png'
import '../layouts/workLayout.css'
import '../layouts/runTracker.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <div className="runTracker2ColLayout">
      <div>
        <h1> Curro </h1>

        <h2> what is it? </h2>
        <p>
          An app that allows running teams and invidiuals to easily track and log
          runs while building a community with other users: either both teammates
          and independent runners!
        </p>

        <h2> role </h2>
        <p>
          I am a UX Designer and Software Developer for this project. I am working
          with another teammate to brainstorm MVP user interface / experience features,
          conduct user tests, and implement our designs.
        </p>
      </div>

      <img id="runTrackerIcon" className="threeQuartersImage" src={icon} />
    </div>

    <h2> inspiration </h2>
      <p>
        Curro is a project for a class where students break into
        teams and are expected to publish an application on the app store.
      </p>
      <p>
        I'm in a group with 3 other students who are on the track team at WashU,
        and they've noticed a problem with the website they're currently using
        to log their workouts. After looking at the site, we decided we can
        build something better.
      </p>

    <h2> brainstorming </h2>

    <p>
      We wanted a platform that can begin as a tool for teams to log workouts and
      help support each other, but which can grow into something more than that:
      a place for athletes to build a community of people striving to be better
      every day.
    </p>

    <div className="runTracker2ColLayout">
      <div>
        <h3> brand identity </h3>
          <img className="twoColImage" src={logoDevelopment} />
      </div>

      <div>
        <h3> wireframes </h3>
          <p>
            We spent a considerable amount of time refining our vision for the product's
            UI. Some of our constraints were:

            <ul>
              <li>
                the brand needs to be somewhat color-agnostic => different users will
                have different colors in their app based on if they are on a team
              </li>
            </ul>
          </p>

          <img className="twoColImage" src={whiteBoard1} />

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
    </div>
  </div>
)

export default IndexPage
