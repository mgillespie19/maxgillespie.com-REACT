import React from 'react'
import Link from 'gatsby-link'

import whiteBoard1 from '../assets/Curro/whiteboard.png'
import icon from '../assets/Curro/app icon.png'
import logoDevelopment from '../assets/Curro/logo ideation.png'
import pitchDeck from '../assets/Curro/CurroPitchDeck.pdf'
import '../layouts/workLayout.css'
import '../layouts/curro.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <div className="twoColLayout">
      <div>
        <h1> Curro </h1>
        <p>
          Curro is a project from a class that I took at Washington University in
          St. Louis that allows running teams and invidiuals to easily
          track and log runs while building a community with other users.
        </p>

        <h2> ROLE </h2>
        <p>
          I am a UX Designer and Software Developer for this project. I am working
          with another teammate to brainstorm MVP user interface / experience features,
          conduct user tests, and implement our designs.
        </p>

        <a 
            className="pdfButton"
            href="https://apps.apple.com/us/app/curro-activity-logger/id1503599546?ls=1"
            rel="noopener noreferrer"
            target="_blank"
        >Download on the iOS App Store</a>
      </div>

      <div>
        <img id="runTrackerIcon" className="threeQuartersImage" src={icon} />
      </div>
    </div>

    <h2> INSPIRATION </h2>
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

    <div className="twoColLayout">
      <div>
        <h3> BRAND IDENTITY </h3>
          <p>
            Honing the brand identity was a process that wasn't taken lightly, and we
            spent multiple weeks iteratively honing how we wanted the product to be 
            perceived by testing against multiple samples of our target users. 
          </p>
          
          <p>
            I love this graphic below because it perfectly captures our thought 
            process from a bird's-eye view -- from initial concept, all the way 
            to "aha" moment.
          </p>
          <img className="twoColImage" src={logoDevelopment} />
      </div>

      <div>
        <h3> BRAINSTORMING </h3>

        <p>
          We wanted a platform that can begin as a tool for teams to log workouts and
          help support each other, but which can grow into something more than that:
          a place for athletes to build a community of people striving to be better
          every day.
        </p>

        <h3> WIREFRAMES </h3>
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

          <h2> PITCH DECK </h2>
          <p>
            We pitched the idea to our class and professor before starting
            development
          </p>
          <a
            className="pdfButton"
            rel="noopener noreferrer"
            href={pitchDeck}
            target="_blank">
            our pitch deck
          </a>

          <h2> TECHNOLOGIES USED </h2>
            <ul>
              <li>
                XCode
              </li>
              <li>
                SwiftUI, Swift
              </li>
              <li>
                TestFlight
              </li>
              <li>
                GraphQL
              </li>
              <li>
                Amazon Web Services (Amplify, Cognito, DynamoDB)
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
