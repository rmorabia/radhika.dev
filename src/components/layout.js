import React from "react"
import { css } from "@emotion/core"
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
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          display: inline-block;
          font-style: normal;
        `}
      >
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    <Link
      to={`/about/`}
      css={css`
        float: right;
      `}
    >
      About
    </Link>
    {children}
  </div>
  )}
  />
)
