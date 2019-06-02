import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Header from '../components/header'
import styles from './blog.styles.scss'

export default ({ data }) => {

  const linkColor = () => {
    const hue = () => Math.floor(Math.random() * 156) + 90
    let linkColor = `2px solid rgb(${hue()}, ${hue()}, ${hue()})`
    return linkColor
  }

  return (
    <Layout>
      <div>
        <Header headerText="Blog" />
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key="node.id">
            <div className="blogPost">
              <p><Link to={node.fields.slug} style={{
                borderBottom: linkColor()
              }}>{node.frontmatter.title}</Link></p>
              <p>{node.frontmatter.date}</p>
            </div>
          </div>
        ))}
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
            date
          }
          excerpt
        }
      }
    }
  }
`
