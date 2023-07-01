import React from 'react'
import './Button.css'

const Button = ({buttonName}) => {
  return (
    <button class="btcn btn4 text-slate-500 hover:text-white">{buttonName}</button>
  )
}

export default Button