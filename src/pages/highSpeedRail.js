import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'
import '../layouts/highSpeedRail.css'
import p1 from '../assets/FutureOfTransport/FutureOfTransport_p1.png'
import p2 from '../assets/FutureOfTransport/FutureOfTransport_p2.png'
import p3 from '../assets/FutureOfTransport/FutureOfTransport_p3.png'
import p4 from '../assets/FutureOfTransport/FutureOfTransport_p4.png'
import p5 from '../assets/FutureOfTransport/FutureOfTransport_p5.png'
import p6 from '../assets/FutureOfTransport/FutureOfTransport_p6.png'
import p7 from '../assets/FutureOfTransport/FutureOfTransport_p7.png'
import p8 from '../assets/FutureOfTransport/FutureOfTransport_p8.png'
import p9 from '../assets/FutureOfTransport/FutureOfTransport_p9.png'
import p10 from '../assets/FutureOfTransport/FutureOfTransport_p10.png'
import p11 from '../assets/FutureOfTransport/FutureOfTransport_p11.png'
import magazine from '../assets/FutureOfTransport/310 Final Project.pdf'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> The Future of Transportation </h1>

    <h2> inspiration </h2>
    <p>
      The following work is my final project for a class I took called Technical
      Writing during the fall semester of my senior year at Washington
      University in St. Louis.
    </p>
    <p>
      We were tasked with creating anything: with taking a concept that had been
      nagging us in the back of our minds, and transforming that into something
      physical that we could hold.
    </p>

    <h2> what is it? </h2>
    <p>
      I made a mock magazine article for a magazine called Popular Mechanics
       -- I wrote about the future of high speed rail and green transportation
      in America, as well as the roadblocks we will face
      along the way in the realization of these technologies.
    </p>
    <p>
      Read from the pages below, or
    </p>
    <p>
      <a
        className="pdfButton"
        rel="noopener noreferrer"
        href={magazine}
        target="_blank">
        click here to view the pdf!
      </a>
    </p>


    <div className="futureOfTransportMagazinePages">
      <img className="page" src={p1} />
      <img className="page" src={p2} />
      <img className="page" src={p3} />
      <img className="page" src={p4} />
      <img className="page" src={p5} />
      <img className="page" src={p6} />
      <img className="page" src={p7} />
      <img className="page" src={p8} />
      <img className="page" src={p9} />
      <img className="page" src={p10} />
      <img className="page" src={p11} />
    </div>

    <h2> technologies used </h2>
    <ul>
      <li>
        Adobe InDesign
      </li>
      <li>
        Adobe Illustrator
      </li>
    </ul>

  </div>
)

export default IndexPage
