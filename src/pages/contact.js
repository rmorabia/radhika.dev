import React from 'react'
import styles from './contact.module.scss'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Header headerText="Contact" />
    <p>If you would like to get in touch, email me at <a href="mailto:hi@rmorabia.com">hi@rmorabia.com</a> or use the contact form below.</p>
    <p>I am also on <a href="http://twitter.com/radhikamorabia">Twitter</a>, <a href="http://github.com/rmorabia">GitHub</a>, and <a href="http://linkedin.com/in/rmorabia">LinkedIn</a>.</p>
    <form name="contact" method="POST" data-netlify="true" className={styles.contactForm}>
      <input type="hidden" name="form-name" value="contact" />
      <label for="name">Name:</label>
      <input type="text" name="name" required />
      <label for="email">Email:</label>
      <input type="email" name="email" required />
      <label for="message">Message:</label>
      <textarea name="message" required />
      <input type="submit" className="submit" className={styles.submit} name="Submit" />
    </form>
  </Layout>
)
