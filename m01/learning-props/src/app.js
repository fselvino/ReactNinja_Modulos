'use strict'

// var React = require('react')
import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'
// import Title from './title'
// import Square from './square'

class App extends Component {
  render() {
    // estudo de children
    // e possivel pegar as informaçoes que estiver dentro das tags do 
    // componente

    return (
      <div>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

export default App
