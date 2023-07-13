import React from 'react'
import '../styles/ClearButton.css'

const ClearButton = (props) => (
  <button className='clear-button'onClick={props.handleClear}>
    {props.children}
  </button>
)


export default ClearButton