import React from 'react'
import './button-secondary.css'

const ButtonSecondary = ({title,url}) => {
  return (
    <a href='url' className='button-secondary'>
        {title}
    </a>
  )
}

export default ButtonSecondary