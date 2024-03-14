import React from 'react'
import './navbar.css'
import Image from 'next/image'
import DownloadButton from '../download-button/download-button'

const Navbar = () => {
  return (
    <div id='navbar'>
        <div>
            <Image className='navbar_logo' src='/images/common/navbar/logomark.svg' width={58.8} height={33.6} />
        </div>
        <div className='navbar_center'>
            <span className='navbar_menu_title'>Explore</span>
            <Image src='./images/common/navbar/downArrow.svg' width={12} height={8} />
        </div>
        <div>
        <div className='navbar_right'>
            <DownloadButton />
        </div>
        </div>
    </div>
  )
}

export default Navbar