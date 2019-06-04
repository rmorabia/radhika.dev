import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Projects &bull; Radhika Morabia</title>
      <link rel="canonical" href="https://radhika.dev/projects" />
    </Helmet>
    <Header headerText="Projects" />
    <p>Here is a selection of projects I am currently excited about.</p>
    <p>To see a full directory of my code and projects, check out my <a href="http://github.com/rmorabia">GitHub</a>.</p>
    <hr />
    <h2>radhika.dev</h2>
    {/* <Img fluid={fluid} /> */}
    <p>Portfolio website featuring canvas animation, static blogging, mobile responsiveness, accessibility, and more.</p>
    <p><b>Tools Used:</b> React, Gatsby, SCSS, and JavaScript</p>
  </Layout>
)

