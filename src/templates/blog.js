import React from 'react'
import Iframe from 'react-iframe'
import Utterances from 'utterances-react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{post.frontmatter.title} &bull; Radhika Morabia</title>
      </Helmet>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <hr />
      <p>
        If you liked this post, get updates about new posts by signing up to my
        infrequent newsletter.
      </p>
      <Iframe
        url='https://rmorabia.substack.com/embed'
        width='300px'
        height='100px'
        styles={{ border: 0, background: 'white' }}
        frameBorder='0'
        scrolling='no'
      />
      <Utterances
        repo='rmorabia/radhika.dev'
        issueTerm='pathname'
        label='blog post'
        theme='github-light'
        crossorigin='anonymous'
        async={false}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
