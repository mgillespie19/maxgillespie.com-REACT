import React from 'react'
import Link from 'gatsby-link'

import '../layouts/workLayout.css'

const IndexPage = () => (
  <div className="WorkDetail">
    <h1> myEHR </h1>

    <p>
      I worked as a team leader with Sling Health, a student-run biotechnology
      incubator, in St. Louis for the 2018-2019 academic school year. Sling
      draws from the greater St. Louis community to connect healthcare
      professionals and student to solve problems in the healthcare system.
    </p>

    <p>
      The problem I chose to try to solve was the issue that currently in the
      healthcare space, despite the fact that most health records live on EHR
      (electronic health record) systems, the benefit of using those systems is
      largely unrealized due to the fact that many of the systems don't have a
      viable way of communicating with each other.
    </p>
    <p>
      Because of HIPAA, a set of rules and regulations that govern the way that
      health records can be transferred, offices and networks that use EHR
      systems largely still perform health record communication via fax,
      because of concerns of being in violation with HIPAA.
    </p>

    <h2>
      Over the course of being a project leader, I:
    </h2>

    <ul>
      <li>
        Assembled a team of 6 other students from Washington University in St.
        Louis, Rice University, and Rensselaer Polytechnic Institute
      </li>
      <li>
        Created a Minimum Viable Product for solving the problem
      </li>
      <li>
        Used the Ethereum blockchain network to validate records using "smart
        contracts"
      </li>
      <li>
        Connected MVP iOS and Webapp to network, and health API's that made
        record retrieval possible
      </li>
      <li>
        Created a financial model, business plan, and pitch deck and
        participated in a mock-pitch to a group of investors in the Greater St.
        Louis area.
      </li>
    </ul>

    <h2> technologies used </h2>
    <ul>
      <li>
        Ethereum
      </li>
      <li>
        Java
      </li>
      <li>
        ReactJS Framework
      </li>
      <li>
        Swift
      </li>
      <li>
        Firebase
      </li>
    </ul>

  </div>
)

export default IndexPage
