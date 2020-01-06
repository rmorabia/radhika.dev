import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from './resume.module.scss'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Resume &bull; Radhika Morabia</title>
      <link rel='canonical' href='https://radhika.dev/projects' />
    </Helmet>
    <Header headerText='Resume' />
    <p>
      <a href='mailto:hi@rmorabia.com'>hi@rmorabia.com</a> &bull;{' '}
      <a href='https://www.linkedin.com/in/rmorabia/'>LinkedIn</a> &bull;{' '}
      <a href='https://github.com/rmorabia'>GitHub</a> &bull;{' '}
      <a href='https://twitter.com/radhikamorabia'>Twitter</a>
    </p>
    <p>Oakland, CA 94607</p>
    <p>
      <b>Current:</b> Software Engineer at{' '}
      <a href='https://opentable.com'>OpenTable</a>, focused on the Booking
      experience.
    </p>
    <p>
      <i>I am not looking for new opportunities at this time.</i>
    </p>
    <h2>Experience</h2>
    <h3>
      Software Engineer at <a href='https://opentable.com'>OpenTable</a>
    </h3>
    <p>
      Full-Stack engineer on the Booking team, building the core booking
      experience and maintaining related systems.
    </p>
    <p>Technology used:</p>
    <ul>
      <li>JavaScript (React, Redux, Hooks)</li>
      <li>Node.js (Express)</li>
      <li>Unit Testing (Jest, Mocha, Chai), End-to-End Testing (Cypress)</li>
    </ul>
    <h3>
      Web Developer at <a href='https://l-tron.com'>L-Tron Corporation</a>
    </h3>
    <p>
      Front-End developer focused on building a 360&deg; camera app on desktop
      and mobile.
    </p>
    <p>
      <ul>
        <li>
          Built a 360&deg; camera app across desktop & mobile platforms using
          Cordova and Electron
        </li>
        <li>
          Introduced best practices such as linting which decreased bugs by 30%
        </li>
        <li>Modernized codebase performance & standards using Vue + Vuex</li>
        <li>
          Streamlined development ecosystem by integrating tools such as Webpack
          and CI
        </li>
        <li>
          Increased developer productivity by over 50% by leading a major
          refactoring project
        </li>
        <li>
          Componentized major code blocks into bloat-free & efficient files
        </li>
      </ul>
    </p>
  </Layout>
)
