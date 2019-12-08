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
          projectTitle="Maven Machines"
          description_p1="My job as an Android Development Intern at a startup in Pittsburgh"
          destinationPage="/mavenMachines"
          imgSrc={mavenImg}
        />

        <ExampleSquare
          projectTitle="Grid"
          description_p1="An iOS app I made for connecting groups to people"
          destinationPage="/grid"
          imgSrc={gridImg}
        />

        <ExampleSquare
          projectTitle="myEHR"
          description_p1="A class project using blockchain to help the healthcare system"
          destinationPage="/myEHR"
          imgSrc={myEHRImg}
        />

        <ExampleSquare
          projectTitle="Personal Work"
          description_p1="Things I make in my free time that I'm passionate about
                          and want to share"
          destinationPage="/personalWork"
          imgSrc={personalWorkImg}
        />
      </div>


      <div className="WorkRowTwo">
        <ExampleSquare
          projectTitle="Small Projects"
          description_p1="Software projects that I've worked on (for the most part
                      exclusively) which showcase smaller skills, but aren't
                      full applications"
          destinationPage="/smallProjects"
          imgSrc={testflightImg}
        />

        <ExampleSquare
          projectTitle="myEHR"
          description_p1="A class project from my junior year of college exploring
                          the potential of blockchain in helping the healthcare system"
          destinationPage="/myEHR"
          imgSrc={myEHRImg}
        />

        <ExampleSquare
          projectTitle="Personal Work"
          description_p1="Things I make in my free time that I'm passionate about
                          and want to share"
          destinationPage="/personalWork"
          imgSrc={personalWorkImg}
        />

        <ExampleSquare
          projectTitle="Small Projects"
          description_p1="Software projects that I've worked on (for the most part
                      exclusively) which showcase smaller skills, but aren't
                      full applications"
          destinationPage="/smallProjects"
          imgSrc={testflightImg}
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
