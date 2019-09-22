import React from 'react'
import Layout from '../components/layout'
import styles from './index.module.scss'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <h1 className={styles.heading}>
      {"Hi, I'm"}{' '}
      <div className={styles.rainbowBackground}>
        <span className={styles.name}>Radhika Morabia</span>
      </div>
      .
    </h1>
    <p>
      I'm a Software Engineer at <a href="https://opentable.com">OpenTable</a>, currently focused on full&#8209;stack web development. I live in Oakland, CA.
    </p>
    <p>
      400+ people are subscribed to my newsletter about my journey in tech. I write with raw honesty and aching detail. This is everything I wish someone had told me a year ago. Sign up below:
    </p>
    <form
      action='https://tinyletter.com/rmorabia'
      method='post'
      target='popupwindow'
      onsubmit="window.open('https://tinyletter.com/rmorabia', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <input
        type='email'
        name='email'
        id='tlemail'
        placeholder='hi@whatever.com'
      />
      <input className='submit' type='submit' value='Subscribe' />
    </form>
    <p>
      <Link to={'/blog'}>Read about what I'm learning on my blog.</Link> It's updated every time I make a breakthrough worth mentioning. I'm currently learning more about Software Engineering &#38; Computer Science fundamentals.
    </p>
    <p>
      I'm always thinking out loud on Twitter. You can follow me at {' '}
      <a href='https://twitter.com/radhikamorabia'>@radhikamorabia</a>.
    </p>
    <p>
      I'm also on <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a> and{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
    <p>
      <i>
        (Psst! If you're not here for developer stuff, check out my personal
        site at <a href='https://rmorabia.com'>rmorabia.com</a>.)
      </i>
    </p>
  </Layout>
)
