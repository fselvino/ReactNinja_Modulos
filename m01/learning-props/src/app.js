'use strict'

// var React = require('react')
import React, { Component } from 'react'
// import Title from './title'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className='container'>
        {
          // no map o primeiro parameto é o valor e o segundo o index do elemento
          ['blue', 'red', 'blue'].map((square, index) => (
            <Square key={index} color={square} />
          ))
        }

      </div>
    )
  }
}

export default App
