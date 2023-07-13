import React from 'react'
import '../styles/Screen.css'

// This is a definition of a component as an ARROW FUNCTION!!!
const Screen = ({input}) => (
  <div className='input'>
    {input}
  </div>
);


export default Screen