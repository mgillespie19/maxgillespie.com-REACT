import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'
import mavenImg from '../assets/maven-machines.png'
import personalWorkImg from '../assets/personal-projects.png'
import gridImg from '../assets/Grid-Logo.png'
import myEHRImg from '../assets/myEHR-logo.png'
import testflightImg from '../assets/testflight-logo.png'
import ExampleCard from '../components/exampleCard'

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

    <div className="QuickPreamble">
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

    <div className="Work">
      <ExampleCard
        projectTitle="Internship at Maven Machines"
        description_p1="My work as an Android Intern during the Summer of 2019
                        at a software startup in Pittsburgh"
        destinationPage="/mavenMachines"
        imgSrc={mavenImg}
      />

      <ExampleCard
        projectTitle="Grid"
        description_p1="An iOS app I made to help connect people who want to make
                        a difference in the world with organizations making a
                        difference"
        destinationPage="/grid"
        imgSrc={gridImg}
      />

      <ExampleCard
        projectTitle="myEHR"
        description_p1="A class project from my junior year of college exploring
                        the potential of blockchain in helping the healthcare system"
        destinationPage="/myEHR"
        imgSrc={myEHRImg}
      />

      <ExampleCard
        projectTitle="Personal Work"
        description_p1="Things I make in my free time that I'm passionate about
                        and want to share"
        destinationPage="/personalWork"
        imgSrc={personalWorkImg}
      />

      <ExampleCard
        projectTitle="Small Projects"
        description_p1="Software projects that I've worked on (for the most part
                    exclusively) which showcase smaller skills, but aren't
                    full applications"
        destinationPage="/smallProjects"
        imgSrc={testflightImg}
      />
    </div>
  </div>
)

export default IndexPage
