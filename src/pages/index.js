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
        <h1> long-walk-on-the-beach taker </h1>
      </div>

      <div id="leftHead">
        <img src={leftHead} />
      </div>
    </div>
    <div className="Work">
      <ExampleCard
        projectTitle="Maven Machines"
        description_p1="Maven is a startup in Pittsburgh, Pennsylvania that
                    makes asset tracking software for the transportation industry.
                    I worked with Maven during the summer of 2019 as an Android
                    Devloper."
        description_p2="I maintained and built new features within the
                    codebase for their app that services thousands of truck
                    drivers and dispatchers daily."
        destinationPage="/mavenMachines"
        imgSrc={mavenImg}
      />

      <ExampleCard
        projectTitle="Grid"
        description_p1="Grid is a personal project that I've wanted to build for
                        a long time, and now feel qualified to build. The core
                        mission for the product is to connect people who want to
                        make a difference in the world with organizations that
                        are out in the world making a difference! I have partnered
                        with 12 students in a upper-level marketing class at
                        Washington University in St. Louis to help me hone my
                        vision for the product through unit testing -- they're
                        currently helping me hone my go-to-market strategy for
                        the product."
        description_p2="NOTE: this product is actively under development! I post
                        updates on the web page for it, you can follow along by
                        periodically checking in on the web page for this project
                        (just beyong the link below) or by checking out the
                        content on my second youtube channel, where I am
                        capturing the experience of bringing the app to life!"
        destinationPage="/grid"
        imgSrc={gridImg}
      />

      <ExampleCard
        projectTitle="myEHR"
        description_p1="Software startup with the mission of transforming the way
                    electronic health records are transferred."
        description_p2="I worked as the project leader with a team of 6 other
                    students to develop the minimum viable patient/provider web
                    portal and mobile application for this product."
        destinationPage="/myEHR"
        imgSrc={myEHRImg}
      />

      <ExampleCard
        projectTitle="Small Projects"
        description_p1="Software projects that I've worked on (for the most part
                    exclusively) which showcase smaller skills, but aren't
                    full applications"
        destinationPage="/smallProjects"
        imgSrc={testflightImg}
      />

      <ExampleCard
        projectTitle="Personal Work"
        description_p1="Things I make in my free time that I'm passionate about
                        and want to share, but which don't necessarily fit into
                        clear project buckets."
        description_p2="[Think Articles, Film Project Breakdowns, General Art,
                        personal challenges, etc.]"
        destinationPage="/personalWork"
        imgSrc={personalWorkImg}
      />
    </div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    </style>
  </div>
)

export default IndexPage
