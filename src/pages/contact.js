import React from 'react'
import { Helmet } from 'react-helmet'
import styles from './contact.module.scss'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Contact &bull; Radhika Morabia</title>
    </Helmet>
    <Header headerText='Contact' />
    <p>
      If you would like to get in touch, email me at{' '}
      <a href='mailto:hi@rmorabia.com'>hi@rmorabia.com</a> or use the contact
      form below.
    </p>
    <p>
      I am also on <a href='http://github.com/rmorabia'>GitHub</a> and{' '}
      <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a>.
    </p>
    <form
      name='contact'
      method='POST'
      data-netlify='true'
      netlify-honeypot="honeypot"
      className={styles.contactForm}
    >
      <input type='hidden' name='form-name' value='contact' />
      <input type='hidden' name='honeypot' />
      <label for='name'>Name:</label>
      <input type='text' name='name' required />
      <label for='email'>Email:</label>
      <input type='email' name='email' required />
      <label for='message'>Message:</label>
      <textarea name='message' />
      <input
        type='submit'
        className='submit'
        className={styles.submit}
        name='Submit'
      />
    </form>
  </Layout>
)
