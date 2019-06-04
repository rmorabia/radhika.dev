import '../assets/base16-ashes.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Canvas from './mouseTrail.js'
import 'normalize.css'
import './layout.scss'

const activeStyles = {
  background: '#00ff7f',
  padding: '5px',
  border: '2px #00ff7f solid'
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
      <div className="container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://radhika.dev" />
        </Helmet>
        <Canvas />
        <ul className="header">
          <li><Link to={'/'} className="homeLink">{data.site.siteMetadata.title}</Link></li>
          <li><Link to={'/projects'} className="headerLink" activeStyle={activeStyles}>Projects</Link></li>
          <li><Link to={'/blog'} className="headerLink" activeStyle={activeStyles}>Blog</Link></li>
          <li><Link to={'/contact'} className="headerLink" activeStyle={activeStyles}>Contact</Link></li>
        </ul>
        {children}
      </div>
    )}
  />
)
