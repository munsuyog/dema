'use client'
import React, { useState } from 'react';
import './navbar.css';
import Image from 'next/image';
import DownloadButton from '../download-button/download-button';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id='navbar'>
      <div>
        <Image className='navbar_logo' src='/images/common/navbar/logomark.svg' width={58.8} height={33.6} />
      </div>
      <div className='navbar_center'>
        <div className='navbar_toggle' onClick={toggleMenu}>
          <span className='navbar_menu_title'>Explore</span>
          <Image src='./images/common/navbar/downArrow.svg' width={12} height={8} alt='downArrow' className={`nav-arrow ${menuOpen ? 'open' : ''}`} />
        </div>
        <div className={`navbar_menu ${menuOpen ? 'open' : ''}`}>
          <Link href="#" className='navbar_menu_title'>Protocol</Link>
          <Link href='#' className='navbar_menu_title'>Learn</Link>
          <Link href='#' className='navbar_menu_title'>About</Link>
          <Link href='#' className='navbar_menu_title'>Blog</Link>
        </div>
      </div>
      <div>
        <div className='navbar_right'>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
