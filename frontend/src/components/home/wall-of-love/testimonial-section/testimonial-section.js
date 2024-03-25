'use client'
import React from 'react';
import TestimonialMedium from './testimonial-md.js';
import TestTestimonials from './TestTestimonials.js';

const TestimonialSection = ({ testimonials }) => {
  console.log(testimonials);
  return (
    <>
        <div className='testimonial-section'>
      <div className='testimonial-left'>
      {testimonials.length > 0 && testimonials.map((testimonial, index) => (
        <TestimonialMedium tweetId={testimonial.tweetId} key={index} />
      ))}
      </div>
      <div className='testimonial-center'>
      {testimonials.length > 0 && testimonials.map((testimonial, index) => (
        <TestimonialMedium tweetId={testimonial.tweetId} key={index} />
      ))}
      </div>
      <div className='testimonial-right'>
      {testimonials.length > 0 && testimonials.map((testimonial, index) => (
        <TestimonialMedium tweetId={testimonial.tweetId} key={index} />
      ))}
      </div>
    </div>
    </>
  );
};

export default TestimonialSection;
