'use client'
import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import Image from 'next/image';
import DownloadButton from '../download-button/download-button';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false)
  }
  const openMenu = () => {
    setMenuOpen(true)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div id='navbar'>
      <div>
        <Link href="/"><Image className='navbar_logo' src='/images/common/navbar/logomark.svg' width={58.8} height={33.6} alt='logo' /></Link>
      </div>
      <div className='navbar_center' ref={navbarRef}>
        <div className='navbar_toggle' onClick={toggleMenu} onMouseEnter={openMenu}>
          <span className='navbar_menu_title'>Explore</span>
          <Image src='/images/common/navbar/downArrow.svg' width={12} height={8} alt='downArrow' className={`nav-arrow ${menuOpen ? 'open' : ''}`} />
        </div>
        <div className={`navbar_menu ${menuOpen ? 'open' : ''}`} onMouseLeave={closeMenu}>
          <Link href="#" className='navbar_menu_title'>Protocol</Link>
          <Link href='/learn' className='navbar_menu_title'>Learn</Link>
          <Link href='/about-us' className='navbar_menu_title'>About</Link>
          <Link href='/blog' className='navbar_menu_title'>Blog</Link>
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
