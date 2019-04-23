import React, { Component } from "react"
import Layout from "../components/layout"
import three from '../assets/three/three.r92.min.js'
import VANTA from '../assets/three/vanta.birds.min.js'

class Index extends Component {
  constructor () {
    super()
    this.overlay = React.createRef()
  }

  componentDidMount() {
    // const overlay = this.overlay.current
    window.VANTA.BIRDS({
      el: '.overlay'
    })
  }

  render () {
    return (
      <div ref={this.overlay} className="overlay" />
    )
  }
}

export default Index
