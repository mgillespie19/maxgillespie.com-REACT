import React from 'react'
import Link from 'gatsby-link'
import './exampleCard.css'

const ExampleCard = ({ siteTitle, projectTitle, imageLink, description }) => (
  <div>
    <div className="Example">
      <h1> {projectTitle} </h1>
      <p> {description} </p>
      <a> read more </a>
    </div>
  </div>
)

export default ExampleCard
