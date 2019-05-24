import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <Header headerText="Contact" />
      <p>If you would like to get in touch, email me at <a href="mailto:hi@rmorabia.com">hi@rmorabia.com</a> or use the contact form below.</p>
      <p>I am also on <a href="http://twitter.com/radhikamorabia">Twitter</a>, <a href="http://github.com/rmorabia">GitHub</a>, and <a href="http://linkedin.com/in/rmorabia">LinkedIn</a>.</p>
      <form>
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="textarea" name="message" />
      </form>
  </Layout>
)
