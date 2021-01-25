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
      I occasionally{' '}
      <a href='https://tinyletter.com/rmorabia'>write a newsletter</a>,{' '}
      <Link to={'/blog'}>write blog posts</Link>,{' '}
      <a href='https://radhika.dev/how-to-be-a-good-mentee/'>give talks</a>,{' '}
      <a href='https://egghead.io/instructors/radhika-morabia'>
        record lessons
      </a>
      , <a href='https://twitch.tv/rmorabia'>stream code challenges</a>, and{' '}
      <a href='https://github.com/rmorabia'>write open-source code</a>.
    </p>
    <p>
      I spend most of my time making{' '}
      <a href='https://open.spotify.com/user/rmorabia'>
        absurdly large Spotify playlists
      </a>
      , skateboarding,{' '}
      <a href='https://www.goodreads.com/user/show/60300309-radhika-morabia'>
        reading books
      </a>
      , <a href='https://letterboxd.com/rmorabia/'>watching films</a>, and{' '}
      <a href='https://egghead.io/instructors/radhika-morabia'>
        writing about how media intersects with our lives
      </a>
      .
    </p>
    <p>
      I'm also on <a href='http://linkedin.com/in/rmorabia'>LinkedIn</a> and{' '}
      <a href='http://github.com/rmorabia'>GitHub</a>.
    </p>
  </Layout>
)
