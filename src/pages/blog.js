import React from 'react'
import { graphql } from 'gatsby'
import  Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key="node.id">
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            ...
            <p>{node.excerpt}</p>
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
