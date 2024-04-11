import React from 'react'
import './skewed-button.css'

const SkewedButton = ({text, fontSize, width, height}) => {
  return (
    <div>
        <div className='shop-anywhere-wrapper' style={{width: width, height: height}}>
            <div className='shop-anywhere-box' style={width || height ? {width: width, height: height, padding: '10px', top: '-10px' }: ""}>
                <span style={{fontSize}}>{text}</span>
            </div>
        </div>
    </div>
  )
}

export default SkewedButton