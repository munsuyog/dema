'use client'
import React, {useState, useEffect} from 'react'
import './join-us.css'
import ButtonSecondary from '@/components/common/button-secondary/button-secondary'

const JoinUs = () => {
    const [isMobile, setMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        // Pause animation if screen width is less than 768px
        if (visualViewport.width < 768) {
          setMobile(true);
        } else {
          setMobile(false);
        }
      };
  
      // Initial call to set animation state
      handleResize();
  
      // Event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Cleanup on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
  return (
    <section id='join-us-section'>
        <div className='join-us-section section-padding'>
            <div className='section-title'>
                <h2>Join Us
                    <br/>
                    Shop | Save | Own
                </h2>
                <ButtonSecondary title="Get the app" url="#" />
            </div>
        </div>
        <svg style={{
                    bottom: 0,
                    zIndex: 0,
                    position: 'absolute',
                    animationPlayState: 'paused'
                }} width="100%" viewBox={isMobile ? "0 0 1240 461" : "0 -10 1440 461"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#0143BE" fill-opacity=".2" d="M-125 461 C137.395
                113.119 852.749 -373.915 1615 461H-125Z" style={{animation: "paths 20s infinite linear"}}>
                </path>
                <circle cx="50%" cy="115%" r="119.5" stroke="#0143BE" stroke-opacity="0.2"></circle>
                <circle cx="50%" cy="115%" r="139.5" stroke="#0143BE" stroke-opacity="0.4"></circle>
                <circle cx="50%" cy="115%" r="159.5" stroke="#3830C9"></circle>
        </svg>
    </section>
  )
}

export default JoinUs