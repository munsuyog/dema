'use client'
import React, {useEffect, useState} from 'react'
import './newsletter.css'
import ButtonPrimary from '@/components/common/button-primary/button-primary';

const NewsletterSection = () => {
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
    <div id='newsletter-section'>
        <div className='newsletter-container'>
            <h2>Email Address</h2>
            <div className='newsletter-input-container'>
                <input placeholder='Email Address' />
                <ButtonPrimary text="Subscribe" bgColor="var(--primary-500)" width="145px" fontSize={20} />
            </div>
            <ButtonPrimary text="Our emails are like unicorns – rare, magical, and no spam included!" width="35%" fontSize={14}/>
        </div>
        <svg style={{
                    bottom: 0,
                    zIndex: 0,
                    position: 'absolute',
                    animationPlayState: 'paused'
                }} width="100%" viewBox={isMobile ? "0 0 1240 461" : "0 -10 1440 461"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#E7FFFA" fillOpacity="1" d="M-125 461 C137.395
                113.119 852.749 -373.915 1615 461H-125Z" style={{animation: "paths 20s infinite linear"}}>
                </path>
                <circle cx="50%" cy="115%" r="119.5" stroke="#22E393CC" strokeOpacity="0.2" ></circle>
                <circle cx="50%" cy="115%" r="139.5" stroke="#22E393CC" strokeOpacity="0.4"></circle>
                <circle cx="50%" cy="115%" r="159.5" stroke="#22E393CC"></circle>
        </svg>
    </div>
  )
}

export default NewsletterSection