'use strict'

// var React = require('react')
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    // para class no react utiliza className no lugar de class
    // para for utiliza htmlFor e sempre CamelCase
    return (
      /**
       *  repassar outro valor que não seja string
       * <Title name='Fernando' lastname='Selvino' />
      </div>
     */
      <div>
        <Title name='Fernando' />
      </div>
    )
  }
})

export default App
