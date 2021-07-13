import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'
import '../layouts/mavenLayout.css'

import tabletImage from '../assets/Maven/mavenimg4.png'
import screen1 from '../assets/Maven/screen1.png'
import screen2 from '../assets/Maven/screen2.png'
import screen3 from '../assets/Maven/screen3.png'

const IndexPage = () => (
    <div className="WorkDetail">
        <h1> Maven Machines </h1>

        <p>
            Maven is a Series A ($8.3M total) B2B SaaS startup in Pittsburgh, Pennsylvania that
            makes asset tracking software for the transportation industry.
            I worked with Maven during the summer of 2019 as an Android
            Devloper, and now work full-time at the company as a product 
            designer and software engineer.
        </p>

        <div className='mavenDetailImages1'>
            <img src={tabletImage} />
        </div>

        <h2> WHAT I DO </h2>
            <ul>
                <li>
                    Key contributor in the design and development of ~350 deliverables over a 3 month window for a key customer
                </li>
                <li>
                    Lead customer discover, UX journey iteration, and UI design for features critical to business development 
                </li>
                <li>
                    Interface between the design and engineering teams to communicate goals and objectives to key stakeholders
                </li>
                <li>
                    Lead multiple software releases to the Google Play Store
                </li>
                <li>
                    Own and lead the designs, architectures, development, testing, and support of core services and infrastructure for Maven’s mobile app & backend systems
                </li>
                <li>
                    Work closely with product managers, designers, and engineers to create detailed and clear requirements and software designs.
                </li>
                <li>
                    Define, create, and execute larger technology visions within team to align with strategic business and engineering goals
                </li>
                <li>
                    Build tools, libraries, and write documentation to elevate your team to work as efficiently and cohesively as possible
                </li>
                <li>
                    Design, architect, and build world-class, scalable, performant distributed systems
                </li>
            </ul>

        <div className='mavenDetailImages2'>
            <img src={screen1} />
            <img src={screen2} />
            <img src={screen3} />
        </div>

        <h2> TECHNOLOGIES USED </h2>
        <ul>
            <li>
                Figma
            </li>
            <li>
                Adobe Illustrator
            </li>
            <li>
                Android Studio
            </li>
            <li>
                Visual Studio Code
            </li>
            <li>
                Java
            </li>
            <li>
                Kotlin
            </li>
        </ul>
    </div>
)

export default IndexPage
