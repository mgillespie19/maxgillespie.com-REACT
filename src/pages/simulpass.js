import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> Simulpass </h1>

    <p>
    Regavi is a startup founded at Washington University in St. Louis with
    the mission of bringing people together by making connections better. I am
    currently working with Regavi to launch a new product called Simulpass.
    </p>

    <h2> summary </h2>
    <ul>
      <li> Work in agile development environment </li>
      <li> Architect and implement MVVM-based iOS application with SwiftUI </li>
      <li> Build app that interfaces directly with AWS Amplify </li>
      <li> Work with team to design blockchain backend, built with LightStreams
      (a cutting-edge Ethereum based protocol that combines the best of
      communication and storage available in blockchain in 2019) </li>
    </ul>

    <h2> technologies used </h2>
    <ul>
      <li>
        Amazon Web Services
      </li>
      <li>
        XCode
      </li>
      <li>
        SwiftUI
      </li>
      <li>
        Various blockchain technologies: Ethereum, LightStreams
      </li>
    </ul>

  </div>
)

export default IndexPage
