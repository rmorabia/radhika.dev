import '../assets/base16-ashes.css'
require('prismjs/plugins/line-numbers/prism-line-numbers.css')
import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"


export default ({ children }) => (
  <StaticQuery
  query={graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `
}
  render={data => (
  <div>
    <Link to={`/`}>
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link
      to={`/about/`}
    >
      About
    </Link>
    {children}
  </div>
  )}
  />
)
