import React from 'react'
import './button-secondary.css'

const ButtonSecondary = ({title,url, onClick}) => {
  return (
    <a onClick={onClick ? onClick : () =>{}} className='button-secondary'>
        {title}
    </a>
  )
}

export default ButtonSecondary