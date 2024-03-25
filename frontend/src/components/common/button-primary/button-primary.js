import React from 'react'
import './button-primary.css'

const ButtonPrimary = ({text, link, width, fontSize}) => {
  return (
    <a className='button-primary' style={{width: width, fontSize:fontSize}} href={link}>{text}</a>
  )
}

export default ButtonPrimary