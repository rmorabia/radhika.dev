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
      I'm a Software Engineer at <a href='https://opentable.com'>OpenTable</a>,
      currently working on building the booking & user experience for 100m+
      diners a month.
    </p>
    <p>
      I occasionally write blog posts, give talks, record lessons, stream code
      challenges, write open-source code, and{' '}
      <a href='https://tinyletter.com/rmorabia'>write a newsletter</a>.
    </p>
    <p>
      I spend most of my time making absurdly large Spotify playlists,
      skateboarding, reading books, watching films, and writing about how media
      intersects with our lives.
    </p>
    <p>
      I'm also on <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a> and{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
  </Layout>
)
