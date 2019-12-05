import React from 'react'
import Link from 'gatsby-link'
import './exampleSquare.css'

const ExampleSquare = ({ siteTitle, projectTitle, imageLink, description_p1,
                        description_p2, destinationPage, imgSrc }) => (
    <div className="FlipContainer" ontouchstart="this.classList.toggle('hover');">

        <div className="Front">
          front
        </div>

        <div className="Back">
          back
        </div>
    </div>
)

export default ExampleSquare
