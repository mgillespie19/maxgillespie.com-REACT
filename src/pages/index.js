import React from 'react'
import Link from 'gatsby-link'

import rightHead from '../assets/head-right.png'
import leftHead from '../assets/head-left.png'
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
      />

      <ExampleCard
        projectTitle="Grid"
        destinationPage="/grid"
      />

      <ExampleCard
        projectTitle="myEHR"
        description_p1="Software startup with the mission of transforming the way
                    electronic health records are transferred."
        description_p2="I worked as the project leader with a team of 6 other
                    students to develop the minimum viable patient/provider web
                    portal and mobile application for this product."
        destinationPage="/myEHR"
      />

      <ExampleCard
        projectTitle="Small Projects"
        description_p1="Software projects that I've worked on (for the most part
                    exclusively) which showcase smaller skills, but aren't
                    full applications"
        destinationPage="/smallProjects"
      />

      <ExampleCard
        projectTitle="Personal Work"
        description_p1="Art, Blog Posts, Videos that I'm passionate about and want
                    to share"
        destinationPage="/personalWork"
        />
    </div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
    </style>
  </div>
)

export default IndexPage
