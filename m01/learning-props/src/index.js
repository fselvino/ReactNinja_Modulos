'use strict'

// var React = require('react')
// var ReactDOM = require('react-dom')
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

// var Title = require('./app')

import App from './app'

const renderApp = (NextApp) => {
  render(
    // React.createElement(Title),
    <AppContainer>
      <NextApp />
    </AppContainer>,

    document.querySelector('[data-js="app"]')

  )
}
renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
