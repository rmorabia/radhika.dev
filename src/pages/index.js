import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Hello Gatsby!</h1>
    <p>PATIENCE IS GREAT.</p>
    <Link to="/contact/">Contact</Link>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
