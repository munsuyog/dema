import React from 'react'
import TestimonialMedium from './testimonial-md'
import './testimonial-section.css'

const TestTestimonials = ({testimonials}) => {
  return (
    <div className='testimonial-section-horizontal'>
      <div className='testimonial-top'>
      {testimonials.length > 0 && testimonials.map((testimonial, index) => (
        <TestimonialMedium tweetId={testimonial.tweetId} key={index} />
      ))}
      </div>
      <div className='testimonial-bottom'>
      {testimonials.length > 0 && testimonials.map((testimonial, index) => (
        <TestimonialMedium tweetId={testimonial.tweetId} key={index} />
      ))}
      </div>
    </div>
  )
}

export default TestTestimonials