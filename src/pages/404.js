import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import '../components/tetris/blockrain.css'
import $ from 'jquery'
import blockrain from '../components/tetris/blockrain.jquery'

class Tetris extends Component {
  componentDidMount () {
    $('.game').blockrain()
  }

  render () {
    return (
      <Layout>
        <h1>Whoops! This page does not exist.</h1>
        <p>While you're here, why not take a break and play some Tetris?</p>
        <div className="game" style={{width: "250px", height: "500px"}} />
      </Layout>
    )
  }

}

export default Tetris