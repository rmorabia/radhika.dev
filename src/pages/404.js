import React from 'react'
import Layout from '../components/layout'
import Tetris from 'react-tetris'
import './404.component.scss'

export default () => (
  <Layout>
    <Header headerText="Whoops! This page does not exist." />
    <p>While you're here, why not take a break and play some Tetris?</p>
    {typeof document !== 'undefined' && Tetris &&
      <Tetris>
        {({
          Gameboard,
          points,
          linesCleared
        }) => {
          return (
            <div>
              <Gameboard />
              <div>
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
