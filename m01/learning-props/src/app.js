'use strict'

// var React = require('react')
import React, { Component } from 'react'
// import Title from './title'
import Square from './square'

class App extends Component {
  render() {
    // estudo de eventos
    // envento onClick ocorre quando o usuario click na tela

    return (
      <div
        className='container'
        onClick={(e) => {
          alert('clicou')
        }}>
        <Square />
      </div>
    )
  }
}

export default App
