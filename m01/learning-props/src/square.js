'use strict'
import React from 'react'

const Square = ({ color }) =>
  (
    <div style={{
      background: color,
      height: '100px',
      width: '100px',
      marginBottom: '10px'
    }} />
  )
Square.defaultProps = {
  color: 'red'
}
export default Square
