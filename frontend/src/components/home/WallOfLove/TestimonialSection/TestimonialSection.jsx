import React, { useEffect, useRef, useState } from 'react';
import TestimonialMedium from './TestimonialMedium.jsx';
import Marquee from 'react-fast-marquee'

const TestimonialSection = ({ testimonials }) => {

  const leftContainerRef = useRef(null);
  const centerContainerRef = useRef(null);
  
  const half = Math.ceil(testimonials.length / 2);
  const testimonialsLeft = testimonials.slice(0, half);
  const testimonialsCenter = testimonials.slice(half, 2 * half); 
  
  return (
    <div className='testimonial-section'>
        <div className='testimonials-wrapper'>
            <div className='testimonial-left'>
            <Marquee gradient="rgba(248, 251, 253, 1), rgba(248, 251, 253, 0)" gradientWidth="3%" speed={35} pauseOnHover direction='left' autoFill ref={leftContainerRef}>
  {testimonialsLeft.map((testimonial, index) => (
    <div key={`left_${index}`} style={{ marginRight: '20px' }}> {/* Adjust the margin-right as needed */}
      <TestimonialMedium tweetId={testimonial.tweetId} />
    </div>
  ))}
</Marquee>

              </div>
            <div className='testimonial-center'>
            <Marquee gradient="rgba(248, 251, 253, 1), rgba(248, 251, 253, 0)" gradientWidth="3%" speed={35} pauseOnHover direction='right' autoFill ref={centerContainerRef}>
  {testimonialsCenter.map((testimonial, index) => (
    <div key={`center_${index}`} style={{ marginRight: '20px' }}>
      <TestimonialMedium tweetId={testimonial.tweetId} />
    </div>
  ))}
</Marquee>

            </div>
        </div>
    </div>
  );
};

export default TestimonialSection;