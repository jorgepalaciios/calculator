import React from "react"
import '../styles/Button.css'

export default function Button(props) {

  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <button
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}> {/* here we add an anonymous function by typing () => */}
      {props.children}
    </button>
  )
}