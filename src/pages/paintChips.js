import React from 'react'
import Link from 'gatsby-link'

import whiteBoard1 from '../assets/Curro/whiteboard.png'
import icon from '../assets/PaintChips.png'
import logoDevelopment from '../assets/Curro/logo ideation.png'
import '../layouts/workLayout.css'
import '../layouts/curro.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <div className="twoColLayout">
      <div>
        <h1> Paint Chips </h1>
        <p>
            Paint chips is an app that enables creators, designers, and artists to 
            quickly track and change running lists of color palettes across multiple 
            projects. 
        </p>

        <p>
            Create any number of color palettes, and quickly add and delete new colors 
            to those palettes using an intuitive slider-based UI for arriving at the 
            perfect color. 
        </p>

        <a 
            className="pdfButton"
            href="https://apps.apple.com/us/app/paint-chips/id1502792725"
            rel="noopener noreferrer"
            target="_blank"
        >Download on the App Store</a>

        <h2> role </h2>
        <p>
          
        </p>
      </div>

      <img id="appIcon" className="threeQuartersImage" src={icon} />
    </div>

    <h2> inspiration </h2>
      <p>
        
      </p>
      <p>
        
      </p>

    <h2> brainstorming </h2>

    <p>
      
    </p>

    <div className="twoColLayout">
      <div>
        <h3> brand identity </h3>
          <img className="twoColImage" src={logoDevelopment} />
      </div>

      <div>
        <h3> wireframes </h3>
          <p>
            

            <ul>
              <li>

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
