import React from 'react'
import Link from 'gatsby-link'
import '../layouts/about.css'

import portrait from '../assets/me-plusme.png'

const IndexPage = () => (
  <div className="Landing">
    <div className="row1">
      <div id="portrait">
        <img src={portrait} />
      </div>
      <div id="hello">
        <h1>  Hi, I'm Max.</h1>
        <h1>  Currently a  </h1>
        <h1> <b>senior</b> </h1>
        <h1>  at Washington </h1>
        <h1>  University </h1>
        <h1>  in St. Louis</h1>
      </div>
    </div>

    <div className="row2">
      <div id="description">
        <p>
          I love storytelling – from personal youtube videos to serialized
          brand documentaries to apps on the Apple App Store and Google Play
          Store, I can't get enough of the process of taking an idea from
          concept to execution.
        </p>

        <p>
          I particularly love working with brands to create the UI/UX design
          for a product, then develop it and bring it to market. I also love
          helping people find their or their brand's most authenic selves
          through meaningful marketing and storytelling.
        </p>

        <p>
          On this website, you can find a collection of my work from film to
          software, and everything in between. If you find any of it interesting
          or want to work together on a project, please don't hesistate to
          reach out to me!
        </p>
      </div>
      <div id="contact">
      <h1> CONTACT </h1>
      <b> max (at) maxgillespie (dot) com </b>
      <p> connect with me on <a href="https://www.linkedin.com/in/max-gillespie/"> <b>LinkedIn</b> </a> </p>
      <p> check out some of my public projects on <a href="https://github.com/mgillespie19"> <b>Github</b> </a> </p>
      <p> subcribe to my <a href="http://youtube.com/maxgillespie"> <b>YouTube</b> </a> channel </p>
      </div>
    </div>
  </div>
)

export default IndexPage
