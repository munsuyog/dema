'use client'
import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import DownloadButton from '../download-button/download-button';

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
        <a href="/"><img className='navbar_logo' src='/images/common/navbar/logomark.svg' width={58.8} height={33.6} alt='logo' /></a>
      </div>
      <div className='navbar_center' ref={navbarRef}>
        <div className='navbar_toggle' onClick={toggleMenu} onMouseEnter={openMenu}>
          <span className='navbar_menu_title'>Explore</span>
          <img src='/images/common/navbar/downArrow.svg' width={12} height={8} alt='downArrow' className={`nav-arrow ${menuOpen ? 'open' : ''}`} />
        </div>
        <div className={`navbar_menu ${menuOpen ? 'open' : ''}`} onMouseLeave={closeMenu}>
          <a href="#" className='navbar_menu_title'>Protocol</a>
          <a href='/learn' className='navbar_menu_title'>Learn</a>
          <a href='/about-us' className='navbar_menu_title'>About</a>
          <a href='/blog' className='navbar_menu_title'>Blog</a>
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