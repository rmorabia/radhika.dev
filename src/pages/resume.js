import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Header from '../components/header'

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
    <p>
      <b>Based in:</b> Oakland, CA
    </p>
    <p>
      <b>Current:</b> Software Engineer at{' '}
      <a href='https://opentable.com'>OpenTable</a>
    </p>
    <p>
      <i>I am not looking for new opportunities at this time.</i>
    </p>
    <h2>Experience</h2>
    <h3>
      Software Engineer at <a href='https://opentable.com'>OpenTable</a>
    </h3>
    <p>
      <i>September 2019 - Present</i>
    </p>
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
      <i>June 2018 - June 2019</i>
    </p>
    <p>
      Full-stack developer on a small B2B product development team, building a
      360&deg; camera app across desktop and mobile for enterprise clients in
      the government sector.
    </p>
    <ul>
      <li>
        Introduced best practices such as linting which decreased bugs by 30%
      </li>
      <li>
        Increased developer productivity by over 50% by leading a major
        refactoring project
      </li>
      <li>
        Streamlined development ecosystem by integrating tools such as Webpack
        and CI
      </li>
      <li>
        Componentized major code blocks into bloat-free & efficient files using
        Vue + Vuex
      </li>
    </ul>
    <h2>Projects</h2>
    <h3>
      Instructor on{' '}
      <a href='https://egghead.io/instructors/radhika-morabia'>Egghead.io</a>
    </h3>
    <p>
      Egghead is a leading instructional site in the web developer community. My
      lessons there have been viewed for over 60 hours, and tend to be focused
      on how Linux tooling integrates with web development.
    </p>
    <h3>
      Admin &amp; Mentor on <a href='https://codebuddies.org'>CodeBuddies</a>
    </h3>
    <p>
      CodeBuddies is a global community dedicated to helping folks get better at
      software development. I have been involved in the community for over 2
      years now.
    </p>
    <h3>
      Speaker at{' '}
      <a href='https://queerjs.com/san-francisco'>QueerJS San Francisco</a>
    </h3>
    <p>
      I spoke about How To Be a Good Mentee to a live and streaming audience in
      SF and NYC. The slides can be seen{' '}
      <a href='https://radhika.dev/how-to-be-a-good-mentee/'>here</a>.
    </p>
    <h3>
      {' '}
      Blogger &amp; Writer at <a href='https://radhika.dev'>radhika.dev</a>
    </h3>
    <p>
      I write a lot, both on my <a href='https://radhika.dev/blog'>blog</a>, but
      also to{' '}
      <a href='https://tinyletter.com/rmorabia'>
        a newsletter audience of 500+
      </a>
      . I mostly write about career development and learning strategies in tech.
    </p>
    <h3>
      Project Creator at <a href='https://github.com/rmorabia'>GitHub</a>
    </h3>
    <p>
      For all other work, please check GitHub. I publish everything (including
      this website!) there.
    </p>
  </Layout>
)
