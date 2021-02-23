import React from 'react'
import Layout from '../components/layout'
import styles from './index.module.scss'
import { Link } from 'gatsby'

export default ({ data }) => {
  const linkColor = () => {
    const hue = () => Math.floor(Math.random() * 156) + 90
    let linkColor = `2px solid rgb(${hue()}, ${hue()}, ${hue()})`
    return linkColor
  }

  return (
    <Layout>
      <h1 className={styles.heading}>
        {"Hi, I'm"}{' '}
        <div className={styles.rainbowBackground}>
          <span className={styles.name}>Radhika Morabia</span>
        </div>
        .
      </h1>
      <p>
        I'm a Software Engineer at <a href='https://opentable.com'>OpenTable</a>
        , currently working on building the booking & user experience for 100m+
        diners a month.
      </p>
      <p>
        This is my blog, where I write about career advice, learning strategies,
        productivity, and more.
      </p>
      <p>You can sign up to be notified about new posts below:</p>
      <p>
        <iframe
          src='https://rmorabia.substack.com/embed'
          width='480'
          height='320'
          style='border:1px solid #EEE; background:white;'
          frameborder='0'
          scrolling='no'
        ></iframe>
      </p>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key='node.id'>
            <div className='blogPost'>
              <p>
                <Link
                  to={node.fields.slug}
                  style={{
                    borderBottom: linkColor()
                  }}
                >
                  {node.frontmatter.title}
                </Link>
              </p>
              <p>{node.frontmatter.date}</p>
            </div>
          </div>
        ))}
        <p>
          <i>
            <Link to='/rss.xml'>RSS</Link>
          </i>
        </p>
      </div>
    </Layout>
  )
}
