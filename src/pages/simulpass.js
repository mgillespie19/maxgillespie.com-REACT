import React from 'react'

import icon from '../assets/Simulpass.png'

import '../layouts/workLayout.css'
import '../layouts/simulpass.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <div className="twoColLayout">
      <div>
        <h1> Simulpass </h1>
        <p>
          Simulpass is a startup founded at Washington University in St. Louis with
          the mission of bringing people together by making connections better.
        </p>

        <h2> ROLE </h2>
        <p>
          Senior iOS Developer / Project Manager
        </p>

      </div>

      <img id="appIcon" className="threeQuartersImage" src={icon} />
    </div>

    <h2> KEY DELIVERABLES </h2>
    <ul>
      <li> Work in agile development environment </li>
      <li> Architect and implement MVVM-based iOS application with SwiftUI </li>
      <li>
        Iterate on existing UI and UX using customer feedback by conducting user
        tests
      </li>
      <li> Build app that interfaces with AWS Amplify and GraphQL </li>
      <li>
        Work with team to design blockchain backend, built with LightStreams
        (a cutting-edge Ethereum based protocol that combines the best of
        communication and storage available in blockchain in 2019)
      </li>
    </ul>

    <h2> TECHNOLOGIES USED </h2>
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
