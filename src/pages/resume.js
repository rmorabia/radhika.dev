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
    </Helmet>
    <Header headerText='Resume' />
    <p>
      <b>
        <a href='https://radhika.dev/resume.pdf'>
          View or download a PDF version of my resume here.
        </a>
      </b>
    </p>
    <p>
      <a href='mailto:hi@rmorabia.com'>hi@rmorabia.com</a> &bull;{' '}
      <a href='https://www.linkedin.com/in/rmorabia/'>LinkedIn</a> &bull;{' '}
      <a href='https://github.com/rmorabia'>GitHub</a>
    </p>
    <p>
      <b>Based in:</b> Oakland, CA
    </p>
    <p>
      <b>Current:</b> Software Engineer at{' '}
      <a href='https://opentable.com'>OpenTable</a>
    </p>
    <h2>Summary</h2>
    <ul>
      <li>Software Engineer with 3+ years of experience in making fast, usable, and clean web applications for 30m+ users</li>
      <li>Co-owned a project to overhaul our backend user logic that led to $400k+ in revenue</li>
      <li>Migrated a legacy web application to a new, React codebase while retaining 99% uptime</li>
      <li>Quickly delivered a new user flow that was featured in national press outlets like WSJ, USA Today, and The Verge</li>
      <li>Mentor in the coding community by making lessons on Egghead.io and volunteering for The Collab Lab</li>
    </ul>
    <h2>Experience</h2>
    <h3>
      Software Engineer at <a href='https://opentable.com'>OpenTable</a>
    </h3>
    <p>
      <i>September 2019 - Present</i>
    </p>
    <p>
      Full-stack engineer on the consumer-facing booking flow, working on the
      booking/checkout process on the desktop and mobile web experience.
    </p>
    <ul>
      <li>Corrected long-standing legacy bugs that cost us $2m/yr+</li>
      <li>
        Developed restaurant-facing marketing features that were used by over
        20% of our userbase
      </li>
      <li>
        Successfully migrated our most important page to a new React monolith
        while maintaining sustainable system design choices
      </li>
      <li>
        Evangelized developer best practices such as thorough PR descriptions
        and an attention to detail on the front-end
      </li>
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
      I write a lot, both on my <a href='https://radhika.dev'>blog</a>, but
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
