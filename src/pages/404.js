import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import $ from 'jquery'
import Tetris from 'react-tetris'
import './404.component.scss'

class Lost extends Component {

  render() {
    return (
      <Layout>
        <h1>Whoops! This page does not exist.</h1>
        <p>While you're here, why not take a break and play some Tetris?</p>
        <Tetris>
          {({
            HeldPiece,
            Gameboard,
            PieceQueue,
            points,
            linesCleared
          }) => {
            // Render it however you'd like
            return (
              <div>
                <HeldPiece />
                <div>
                  <p>Points: {points}</p>
                  <p>Lines Cleared: {linesCleared}</p>
                </div>
                <Gameboard />
                <PieceQueue />
              </div>
            )
          }}
        </Tetris>
      </Layout>
    )
  }

}

export default Lost
