'use strict'

// var React = require('react')
import React, { Component } from 'react'
import Button from './button'
// import Title from './title'
// import Square from './square'

class App extends Component {
  render() {
    // estudo de children
    // e possivel pegar as informaçoes que estiver dentro das tags do 
    // componente

    return (
      <div>
        <Button>Botão2</Button>
      </div>
    )
  }
}

export default App
