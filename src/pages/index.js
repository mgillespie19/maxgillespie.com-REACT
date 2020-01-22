import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'
import mavenImg from '../assets/maven-machines.png'
import personalWorkImg from '../assets/personal-projects.png'
import gridImg from '../assets/Grid-Logo.png'
import myEHRImg from '../assets/myEHR-logo.png'
import testflightImg from '../assets/testflight-logo.png'
import rainBow from '../assets/colorstrip.png'
import popMechanics from '../assets/Pop_Mechanics_Pilot.png'
import skillshare from '../assets/skillshare.png'
import colorPicker from '../assets/colorPalettes.png'
import wallsNHalls from '../assets/walls_n_halls.png'
import simulpassImg from '../assets/Simulpass.png'
import ExampleSquare from '../components/exampleSquare'

const IndexPage = () => (
  <div className="Page">
    <div  className="Landing">
      <div id="rightHead">
        <img src={rightHead} />
      </div>

      <div className="Summary">
        <h1> developer </h1>
        <h1> ui/ux designer </h1>
        <h1> filmmaker </h1>
        <h1> marketer </h1>
        <h3> long-walk-on-the-beach taker </h3>
      </div>

      <div id="leftHead">
        <img src={leftHead} />
      </div>
    </div>



    <div className="BottomHalf">
      <div className="QuickPreambleBody">
        <h1>
          my work
        </h1>
        <p>
          this is a collection of my work -- some of the things I'm passionate about,
          proud to have worked on, or am otherwise excited to share.
        </p>
        <p>
          if you like what you see, and are interested in working together on a project,
          check out <Link to="/about"> <b> contact </b> </Link> in my about section,
          or head over to <Link to="/"> <b> my contracting company </b> </Link>
        </p>
      </div>

      <div className="SideBar1">
        <img src={rainBow} />
      </div>

      <div className="WorkRowOne">
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
          projectTitle="myEHR"
          description_p1="A class project using blockchain to help the healthcare system"
          destinationPage="/myEHR"
          imgSrc={myEHRImg}
        />
        <ExampleSquare
          projectTitle="The Future of Transportation"
          description_p1="A sample magazine article I wrote about high speed rail"
          destinationPage="/highSpeedRail"
          imgSrc={popMechanics}
        />
        <ExampleSquare
          projectTitle="Walls 'n' Halls"
          description_p1="A retro video game built with Unity"
          destinationPage="/wallsNHalls"
          imgSrc={wallsNHalls}
        />
        <ExampleSquare
          projectTitle="Personal Work"
          description_p1="Mostly sketches and simple digital concepts"
          destinationPage="/personalWork"
          imgSrc={personalWorkImg}
        />
      </div>
    </div>

    <div className="Footer">
      <p> © 2019 max gillespie </p>
      <p> 6105 Delmar Blvd </p>
      <p> St. Louis, MO 63112</p>
      <p> inquiries: max@maxgillespie.com </p>
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
