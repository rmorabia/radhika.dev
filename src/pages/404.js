import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Layout from '../components/layout'
import Tetris from 'react-tetris'
import axios from 'axios'
import Header from '../components/header'
import './404.component.scss'

class Lost extends Component {

  componentDidMount() {
    axios.get('https://horoscope-api.herokuapp.com/horoscope/today/Cancer', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(res => { console.log(res) } )
  }

  render() {
    return (

      <Layout>
        <Header headerText="Whoops! This page does not exist." />
        <MediaQuery query="(max-device-width: 1280px)">

        </MediaQuery>
        <p>While you're here, why not take a break and play some Tetris?</p>
        {typeof document !== 'undefined' && Tetris &&
          <Tetris>
            {({
              Gameboard,
              points,
              linesCleared,
              HeldPiece
            }) => {
              return (
                <div className="parent">
                  <div>
                    <Gameboard />
                  </div>
                  <div>
                    <p className="tetris-header" id="held-piece">Held Piece</p>
                    <HeldPiece />
                    <p className="tetris-header">Instructions</p>
                    <p>Left &amp; Right to Move</p>
                    <p>Up to flip tetromino</p>
                    <p>Down for soft drop</p>
                    <p>Space for hard drop</p>
                    <p className="tetris-header">Score</p>
                    <p>Points: {points}</p>
                    <p>Lines Cleared: {linesCleared}</p>
                  </div>
                </div>
              )
            }}
          </Tetris>
        }
      </Layout>
    )
  }
}

export default Lost