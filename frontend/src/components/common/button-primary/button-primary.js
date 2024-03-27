import React from 'react'
import './button-primary.css'

const ButtonPrimary = ({text, link, width, fontSize, bgColor, color}) => {
  return (
    <a className='button-primary' style={{width: width, fontSize:fontSize, backgroundColor:bgColor, color: color}} href={link}>{text}</a>
  )
}

export default ButtonPrimary