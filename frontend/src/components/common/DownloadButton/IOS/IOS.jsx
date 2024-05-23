import React from 'react'
import './IOS.css'

const IOSQR = () => {
  return (
    <div id='ios-qr'>
        <div className='ios-qr-container'>
            <img src="/images/common/download-btn/ios-qr.svg" width={100} height={100} alt='ios-qr' className='ios-qr' />
        </div>
        <div>
            <h2 className='ios-title'>iOS</h2>
            <p className='ios-subtitle'>App Store</p>
        </div>
    </div>
  )
}

export default IOSQR