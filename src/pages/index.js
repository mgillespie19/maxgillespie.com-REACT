import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'
import mavenImg from '../assets/maven.jpg'
import personalWorkImg from '../assets/personal-projects.png'
import gridImg from '../assets/Grid-Logo.png'
import myEHRImg from '../assets/myEHR-logo.png'
import testflightImg from '../assets/testflight-logo.png'
import rainBow from '../assets/colorstrip.png'
import popMechanics from '../assets/Pop_Mechanics_Pilot.png'
import paintChips from '../assets/PaintChips.png'
import wallsNHalls from '../assets/walls_n_halls.png'
import simulpassImg from '../assets/Simulpass.png'
import runTrackerImg from '../assets/run tracker logo.png'
import greenShoeThumb from '../assets/greenShoeThumb.png'
import ExampleSquare from '../components/exampleSquare'

const IndexPage = () => (
  <div className="Page">
    <div  className="Landing">
      <div id="rightHead">
        <img src={rightHead} />
      </div>

      <div className="Summary">
        <h1> DEVELOPER </h1>
        <h1> PRODUCT DESIGNER </h1>
        <h1> FILMMAKER </h1>
        <h1> MARKETER </h1>
        <h3> long-walk-on-the-beach-taker </h3>
      </div>

      <div id="leftHead">
        <img src={leftHead} />
      </div>
    </div>



    <div className="BottomHalf">
      <div className="QuickPreambleBody">
        <h1>
          MY WORK
        </h1>
        <p>
          This is a collection of my work -- some of the things I'm passionate about,
          proud to have worked on, or am otherwise excited to share.
        </p>
        <p>
          If you like what you see, and are interested in working together on a project,
          check out <Link to="/about"> <b> contact </b> </Link> in my about section,
          or head over to <a href="https://www.paisleydesign.group" target="_blank"> <b> my contracting company </b> </a>
        </p>
      </div>

      <div className="SideBar1">
        <img src={rainBow} />
      </div>

      <div className="WorkRowOne">
        <ExampleSquare
          projectTitle="Paint Chips"
          description_p1="A color palette curation app"
          destinationPage="/paintChips"
          imgSrc={paintChips}
        />
        <ExampleSquare
          projectTitle="Curro"
          description_p1="An iOS app by runners, for runners"
          destinationPage="/curro"
          imgSrc={runTrackerImg}
        />
        <ExampleSquare
          projectTitle="Simulpass"
          description_p1="A current project developing an iOS app for a startup"
          destinationPage="/simulpass"
          imgSrc={simulpassImg}
        />
        <ExampleSquare
          projectTitle="Maven Machines"
          description_p1="My Android Internship at a Pittsburgh startup"
          destinationPage="/mavenMachines"
          imgSrc={mavenImg}
        />
        <ExampleSquare
          projectTitle="The Green Shoe Project"
          description_p1="A sustainable fashion project"
          destinationPage="/greenShoeProject"
          imgSrc={greenShoeThumb}
        />
        <ExampleSquare
          projectTitle="The Future of Transportation"
          description_p1="A sample magazine article I wrote about high speed rail"
          destinationPage="/highSpeedRail"
          imgSrc={popMechanics}
        />
      </div>
    </div>

    <div className="Footer">
      <p> © 2020 MAX GILLESPIE </p>
      <p> 44 THORN ST. </p>
      <p> SEWICKLEY PA 15143</p>
      <p> INQUIRIES: MAX@MAXGILLESPIE.COM </p>
    </div>
  </div>
)

export default IndexPage

// <ExampleSquare
//   projectTitle="Skillshare"
//   description_p1="Take a look at some of the classes I'm teaching!"
//   destinationPage="/skillshare"
//   imgSrc={skillshare}
// />
// <ExampleSquare
//   projectTitle="Color Picker"
//   description_p1="An iOS app for color palette design"
//   destinationPage="/colorPicker"
//   imgSrc={colorPicker}
// />

// <ExampleSquare
//   projectTitle="Grid"
//   description_p1="An iOS app I made for connecting groups to people"
//   destinationPage="/grid"
//   imgSrc={gridImg}
// />
