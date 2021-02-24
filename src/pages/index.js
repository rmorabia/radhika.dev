import React from 'react'
import Iframe from 'react-iframe'
import Layout from '../components/layout'
import styles from './index.module.scss'
import { graphql, Link } from 'gatsby'

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
        <Iframe
          url='https://rmorabia.substack.com/embed'
          width='300px'
          height='100px'
          styles={{ border: 0, background: 'white' }}
          frameBorder='0'
          scrolling='no'
        />
      </p>
      <div>
        <h2>All Posts</h2>
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

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
