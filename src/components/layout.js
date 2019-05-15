import '../assets/base16-ashes.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import 'normalize.css'
import './layout.scss'

const activeStyles = {
  background: '#00ff7f',
  padding: '5px',
  borderBottom: '2px #00ff7f solid'
}

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
      <div class="container">
        <ul class="header">
          <li><Link to={'/'} style={activeStyles}>{data.site.siteMetadata.title}</Link></li>
          <li><Link to={'/projects'} activeStyle={activeStyles}>Projects</Link></li>
          <li><Link to={'/blog'} activeStyle={activeStyles}>Blog</Link></li>
          <li><Link to={'/contact'} activeStyle={activeStyles}>Contact</Link></li>
        </ul>
        {children}
      </div>
    )}
  />
)
