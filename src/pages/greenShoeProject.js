import React from 'react'
import Link from 'gatsby-link'

import moodboard from '../assets/GreenShoeProject/shoe moodboard.pdf'
import '../layouts/workLayout.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Green Shoe Project </h1>
    <p>
      For as long as I can remember, I’ve been enamored with the power of
      sneakers to communicate to  consumers through their design and bring
      people together who would otherwise have nothing in common.
    </p>
    <p>
      The world of footwear still has a long way to go before the biggest
      players are doing as much as they can to help reduce their carbon
      footprint and improve their stustainability, and I want to be a part of
      the dialogue that fixes that.
    </p>
    <p>
      This project is my first steps into being a part of that dialogue
    </p>

    <h2> WHAT IS IT? </h2>
    <p>
      This project is a physical product and content series I created in
      affiliation with <a href="https://armour.wustl.edu/" target="_blank"> Armour</a>, a
      super cool WashU student-run fashion magazine.
    </p>

    <h2> CONCEPT DEVELOPMENT </h2>
    <p>
      <a
        className="pdfButton"
        rel="noopener noreferrer"
        href={moodboard}
        target="_blank">
        project moodboard
      </a>
    </p>

    <h2> TECHNOLOGIES USED </h2>
    <ul>
      <li> Adobe Illustrator </li>
      <li> Adobe InDesign </li>
    </ul>
  </div>
)

export default IndexPage
