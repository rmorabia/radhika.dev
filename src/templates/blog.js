import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.async = true
    script.setAttribute('repo', 'rmorabia/radhika.dev')
    script.setAttribute('issue-term', 'pathname')
    script.setAttribute('label', 'blog post')
    script.setAttribute('theme', 'github-light')
    script.setAttribute('crossorigin', 'anonymous')

    const scriptParentNode = document.getElementById('comments')
    scriptParentNode.appendChild(script)

    return () => {
      // cleanup - remove the older script with previous theme
      scriptParentNode.removeChild(scriptParentNode.firstChild)
    }
  }, [data])

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
      <form
        action='https://tinyletter.com/rmorabia'
        method='post'
        target='popupwindow'
        onsubmit="window.open('https://tinyletter.com/rmorabia', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <input
          type='text'
          name='email'
          id='tlemail'
          placeholder='hi@whatever.com'
        />
        <input className='submit' type='submit' value='Subscribe' />
      </form>
      <script
        src='https://utteranc.es/client.js'
        repo='rmorabia/radhika.dev'
        issue-term='pathname'
        label='blog'
        theme='github-light'
        crossorigin='anonymous'
        async
      ></script>
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
