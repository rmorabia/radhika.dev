import '../assets/base16-ashes.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import 'normalize.css'
import './layout.scss'

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
    `}
    render={data => (
      <div>
        <Link to={'/'}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <Link to={'/about/'}>About</Link>
        {children}
      </div>
    )}
  />
)
