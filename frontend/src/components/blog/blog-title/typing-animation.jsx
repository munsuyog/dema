import React, { useState, useEffect } from 'react';
import './blog-title.css'; // Import your CSS file for styling
import { TypeAnimation } from 'react-type-animation';


const TypingAnimation = ({setCurrentWord}) => {
    const [textColor, setColor] = useState('var(--primary-500)');
    const [isMobile, setMobile] = useState(null);

    useEffect(() => {
        const updateIsMobile = () => {
          const isMobile = window.matchMedia("(max-width: 768px)").matches;
          setMobile(isMobile);
        };
      
        updateIsMobile(); // Call initially to set the correct value
        window.addEventListener('resize', updateIsMobile); // Add event listener to handle resize
      
        return () => {
          window.removeEventListener('resize', updateIsMobile); // Cleanup the event listener
        };
      }, []);
      

  return (
    <div className="typing-animation" style={{color:textColor, fontSize: `${isMobile ? '32px' : '4.375em'}`}}>
           <TypeAnimation
      sequence={[
        'Updates', // Types 'One'
        2000,
        () => {setCurrentWord("Shoppers")},
        '',
        500,
        'Shoppers', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        () => setCurrentWord("Sellers"),
        '',
        500,
        () => {setColor('black')},
        'Sellers',
        2000, // Types 'Three' without deleting 'Two'
        () => setCurrentWord("Community"),
        '',
        500,
        () => setColor('rgba(248, 79, 57, 1)'),
        'Community',
        2000, // Types 'Three' without deleting 'Two'
        () => {setCurrentWord("Updates")},
        '',
        500,
        () => setColor('var(--primary-500)')
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      speed={200}
      style={{ fontWeight: 700, display: 'inline-block', fontFamily: 'var(--font-open-sans)' }}
    />
    </div>
  );
};

export default TypingAnimation;
