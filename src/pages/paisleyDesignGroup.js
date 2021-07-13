import React from 'react'
import Link from 'gatsby-link'

import whiteBoard1 from '../assets/Curro/whiteboard.png'
import logo from '../assets/PDG_logo_2.png'
import logoDevelopment from '../assets/Curro/logo ideation.png'
import '../layouts/workLayout.css'
import '../layouts/curro.css'

const IndexPage = () => (
<div className="WorkDetail">
    <div className="twoColLayout">
        <div>
            <h1> 
                Paisley Design Group 
            </h1>
            <p>
                I am the co-founder of Paisley Design Group.
            </p>
            <p>
                The business was founded to work with small businesses affected by COVID-19 to 
                help them adapt their business models to an ever-digitizing economy.
            </p>

            <a 
                className="pdfButton"
                href="https://www.thepaisleydesigngroup.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                Visit our site
            </a>
        </div>

        <img id="appIcon" className="threeQuartersImage" src={logo} />
    </div>

    <div>
        <h2> INSPIRATION </h2>
        <p>
          I started Paisley with a friend that I met in a class at Washington 
          University in St. Louis. We met working together building an app for a 
          nonprofit from the area that had just gotten some money from the 
          St. Louis Zoo to transport a mural around the region and raise awareness for 
          endangered and extinct bird species. 
        </p>
        <p>
          After the class ended, we realized that we had a talent -- not to mention 
          a passion -- for working with nonprofits and small businesses to help
          them reach their goals.
        </p>
        <p>
          In the midst of COVID, many businesses and nonprofits need help more than ever
          and we are extremely excited to help as many organizations in any 
          way that we can.
        </p>
    </div>

    <div>
        <h2> WHAT I DO </h2>
        <ul>
            <li>
                Conduct consultations to discover exactly what a customer needs in 
                order to be more successful than they are today
            </li>
            <li>
                Create and present multiple design iterations for customer user interfaces
            </li>
            <li>
                Conduct user experience research
            </li>
            <li>
                Lead an agile development team
            </li>
            <li>
                Build out a body of digital assets to fit each customer's needs
            </li>
        </ul>
    </div>

    <div>
        <h2> TECHNOLOGIES I USE </h2>
        
        <ul>
            <li>
                XCode, Android Studio, Visual Studio Code
            </li>
            <li>
                Firebase, Flywheel, Amazon AWS, Amazon Amplify
            </li>
            <li>
                Squarespace, Wordpress, Semplice
            </li>
            <li>
                SwiftUI, Swift, Java, Javascript, React Native, HTML, CSS
            </li>
            <li>
                Adobe Illustrator, Figma
            </li>
        </ul>
    </div>
</div>
)

export default IndexPage
