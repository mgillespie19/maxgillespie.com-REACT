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
        description="Maven is a startup in Pittsburgh, Pennsylvania that
                    makes asset tracking software for the transportation industry.
                    I worked with Maven during the summer of 2019 as an Android
                    Devloper; I maintained and built new features within the
                    codebase for their app that services thousands of truck
                    drivers and dispatchers daily."
      />

      <ExampleCard projectTitle="Grid"/>

      <ExampleCard projectTitle="myEHR"/>

      <ExampleCard projectTitle="Small Projects | software projects that showcase smaller skills, but aren't full application"/>

      <ExampleCard projectTitle="Personal Work | Art, Blog Posts, Videos that I'm passionate about and want to share"/>
    </div>
  </div>
)

export default IndexPage
