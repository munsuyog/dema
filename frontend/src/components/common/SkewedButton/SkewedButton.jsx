import React from 'react'
import './SkewedButton.css'

const SkewedButton = ({text, fontSize, width, height}) => {
  return (
    <div>
        <div className='skewed-btn-wrapper' style={{width: width, height: height}}>
            <div className='skewed-btn-box' style={width || height ? {width: width, height: height, padding: '10px', top: '-10px' }: {}}>
                <span style={{fontSize}}>{text}</span>
            </div>
        </div>
    </div>
  )
}

export default SkewedButton