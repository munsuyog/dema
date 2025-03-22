import React from 'react'
import './Android.css'

const AndroidQR = () => {
  return (
    <div id='android-qr'>
        <div className='ios-qr-container'>
            <img src="/images/common/download-btn/android-qr.svg" width={100} height={100} alt='ios-qr' className='ios-qr' />
        </div>
        <div>
            <h2 className='android-title'>Android</h2>
            <p className='android-subtitle'>Play Store</p>
        </div>
    </div>
  )
}

export default AndroidQR