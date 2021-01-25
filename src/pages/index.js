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
      900+ people are subscribed to my occasional newsletter about tech & careers. Sign up below:
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
      I teach web developers how Linux tooling is intertwined with developer productivity as an <a href="https://egghead.io/instructors/radhika-morabia">instructor at Egghead.io</a>.
    </p>
    <p>
      <Link to={'/blog'}>Read about what I'm learning on my blog.</Link> It's updated every time I make a breakthrough worth mentioning.
    </p>
    <p>
      I'm also on <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a> and{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
  </Layout>
)
