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
        >Download on the iOS App Store</a>

      </div>

      <img id="appIcon" className="threeQuartersImage" src={icon} />
    </div>

    <h2> INSPIRATION </h2>
    <p>
        This app came out of the necessity for me to build color palettes combined with
        the lack of options I was satisfied with to do so.  
    </p>
    <p>
        My vision was to build a super-simple product that could empower its users to
    </p>

    {/* <h2> in the app </h2> */}

    <div className="twoColLayout">
      <div>
        <h2> COOL STATS </h2>
        <p> 
            Downloads as of June 26, 2020: 260
        </p>
        <p>
            Release date: march 27, 2020
        </p>
      </div>

      <div>
          <h2> TECHNOLOGIES USED </h2>
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
