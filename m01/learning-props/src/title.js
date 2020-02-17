'use strict'

import React from 'react'

const Title = React.createClass({

  // getDefaultProps podemos definir as propriedades padrão
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    }
  },
  render: function () {
    return (
      <h1>Ola {this.props.name + ' ' + this.props.lastname} </h1>

    )
  }
})

export default Title
