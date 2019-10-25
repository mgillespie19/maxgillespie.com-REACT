import React from 'react'
import Link from 'gatsby-link'
import './exampleCard.css'

const ExampleCard = ({ siteTitle, projectTitle, imageLink, description_p1,
                        description_p2, destinationPage }) => (
  <div>
    <div className="Example">
      <div className="InnerContent">
        <h1> {projectTitle} </h1>
        <p> {description_p1} </p>
        <p> {description_p2} </p>
        <Link to={destinationPage}> read more </Link>
      </div>
    </div>
  </div>
)

export default ExampleCard
