import React from 'react'
import './button-secondary.css'

const ButtonSecondary = ({title,url, onClick, onHover}) => {
  return (
    <a onClick={onClick ? onClick : () =>{}} onMouseEnter={onHover ? onHover : () => {}} onMouseLeave={onHover ? onHover : () => {}} className='button-secondary'>
        {title}
    </a>
  )
}

export default ButtonSecondary