import React from 'react'
import Link from 'gatsby-link'
import NoteCard from '../assets/NoteCard.png'

import './exampleSquare.css'

const ExampleSquare = ({ siteTitle, projectTitle, imageLink, description_p1,
                        description_p2, destinationPage, imgSrc }) => (
    <div className="FlipContainer" ontouchstart="this.classList.toggle('hover');">

        <div className="Front">
          <div className="ImageContainer">
            <img src={imgSrc} />
          </div>
        </div>

        <div className="Back">


          <div className="ExampleInfo">
            <h1> {projectTitle} </h1>
            <p> {description_p1} </p>
            <p> {description_p2} </p>
            <Link to={destinationPage}> read more </Link>
          </div>
        </div>
    </div>
)

// <div className="FlipContainer" ontouchstart="this.classList.toggle('hover');">
//
//     <div className="Front">
//       <div className="ImageContainer">
//         <img src={imgSrc} />
//       </div>
//     </div>
//
//     <div className="Back">
//       <div className="ExampleInfo">
//         <h1> {projectTitle} </h1>
//         <p> {description_p1} </p>
//         <p> {description_p2} </p>
//         <Link to={destinationPage}> read more </Link>
//       </div>
//     </div>
// </div>

export default ExampleSquare
