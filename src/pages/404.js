import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import Layout from '../components/layout'
import Tetris from 'react-tetris'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import Header from '../components/header'
import './404.component.scss'

class Lost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      horoscope: null
    }
  }

  componentDidMount() {
    axios
      .post('https://aztro.sameerkumar.website/?sign=cancer&day=today')
      .then(res => {
        this.setState({ horoscope: res.data.description })
      })
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <meta charSet='utf-8' />
          <title>404 &bull; Radhika Morabia</title>
        </Helmet>
        <Header headerText='Whoops! This page does not exist.' />
        <MediaQuery query='(max-device-width: 1280px)'>
          <p>Since you're here, why not read my horoscope for today?</p>
          <p id='horoscope'>{this.state.horoscope}</p>
        </MediaQuery>
        <MediaQuery query='(min-device-width: 1281px)'>
          <p>While you're here, why not take a break and play some Tetris?</p>
          {typeof document !== 'undefined' && Tetris && (
            <Tetris>
              {({ Gameboard, points, linesCleared, HeldPiece }) => {
                return (
                  <div className='parent'>
                    <div>
                      <Gameboard />
                    </div>
                    <div>
                      <p className='tetris-header' id='held-piece'>
                        Held Piece
                      </p>
                      <HeldPiece />
                      <p className='tetris-header'>Instructions</p>
                      <p>Left &amp; Right to Move</p>
                      <p>Up to flip tetromino</p>
                      <p>Down for soft drop</p>
                      <p>Space for hard drop</p>
                      <p>Shift to hold piece</p>
                      <p className='tetris-header'>Score</p>
                      <p>Points: {points}</p>
                      <p>Lines Cleared: {linesCleared}</p>
                    </div>
                  </div>
                )
              }}
            </Tetris>
          )}
        </MediaQuery>
      </Layout>
    )
  }
}

export default Lost
