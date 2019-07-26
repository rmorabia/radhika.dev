import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from './projects.module.scss'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Projects &bull; Radhika Morabia</title>
      <link rel='canonical' href='https://radhika.dev/projects' />
    </Helmet>
    <Header headerText='Projects' />
    <p>Here is a selection of projects I am currently excited about.</p>
    <p>
      To see a full directory of my code and projects, check out my{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
    <hr />

    <h2>Colors & Cookies</h2>
    <Img fluid={data.colors.childImageSharp.fluid} alt='Colors and Cookies' />
    <p>
      Idle Clicker RPG in the vein of Earthbound, joy, and 🌈s.
    </p>
    <p>
      <b>Tools Used:</b> React, Redux, Router, Express/Node.js, Jest, and more to come.
    </p>
    <p>
      <a
        className={styles.source}
        href='https://github.com/rmorabia/colorsandcookies'
      >
        View Source
      </a>
    </p>

    <h2>radhika.dev</h2>
    <Img fluid={data.radhika.childImageSharp.fluid} alt='' />
    <p>
      Portfolio website featuring canvas animation, static blogging, mobile
      responsiveness, accessibility, and more.
    </p>
    <p>
      <b>Tools Used:</b> React, Gatsby, SCSS, and JavaScript
    </p>
    <p>
      <a
        className={styles.source}
        href='https://github.com/rmorabia/radhika.dev'
      >
        View Source
      </a>
    </p>

    <h2>
      <a href='https://radgithubsearch.netlify.com'>GitHub Repository Search</a>
    </h2>
    <Img fluid={data.github.childImageSharp.fluid} alt='' />
    <p>
      GitHub Repository Search app featuring use of query parameters, form
      validation, mobile responsiveness, REST APIs, and more.
    </p>
    <p>
      <b>Tools Used:</b> Vue, Bootstrap, and JavaScript
    </p>
    <p>
      <a
        className={styles.source}
        href='https://github.com/rmorabia/github-repo-search'
      >
        View Source
      </a>
    </p>

    <h2>
      <a href='http://radtimeline.herokuapp.com/'>Timeline</a>
    </h2>
    <Img fluid={data.timeline.childImageSharp.fluid} alt='' />
    <p>
      Timeline app featuring the ability to see events based on category, to see
      future or past events, and to mark an event as attended or not. Uses
      self-made event API with request validation on the back-end.
    </p>
    <p>
      <b>Tools Used:</b> React, Node.js, Express, JavaScript, and CSS
    </p>
    <p>
      <a className={styles.source} href='https://github.com/rmorabia/timeline'>
        View Source
      </a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    radhika: file(relativePath: { eq: "assets/images/radhikadev.png" }) {
      childImageSharp {
        fluid(maxWidth: 1549, maxHeight: 890) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    github: file(relativePath: { eq: "assets/images/githubreposearch.png" }) {
      childImageSharp {
        fluid(maxWidth: 1550, maxHeight: 832) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    timeline: file(relativePath: { eq: "assets/images/timeline.png" }) {
      childImageSharp {
        fluid(maxWidth: 1552, maxHeight: 830) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    colors: file(relativePath: { eq: "assets/images/colorsandcookies.png" }) {
      childImageSharp {
        fluid(maxWidth: 1552, maxHeight: 830) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
