import React, { useEffect, useRef, useState } from 'react';
import TestimonialMedium from './testimonial-md.jsx';

const TestimonialSection = ({ testimonials }) => {
  const [isMobile, setIsMobile] = useState(false);

  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);
  const centerContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the threshold as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin
      threshold: 0.5 // Trigger when half of the container is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initializeInfiniteScroll(entry.target);
          observer.unobserve(entry.target); // Stop observing once initialized
        }
      });
    }, options);

    if (isMobile && centerContainerRef.current) {
      observer.observe(centerContainerRef.current);
    }
    if (!isMobile) {
      if (leftContainerRef.current) observer.observe(leftContainerRef.current);
      if (rightContainerRef.current) observer.observe(rightContainerRef.current);
      if (centerContainerRef.current) observer.observe(centerContainerRef.current);
    }

    return () => {
      if (!isMobile) {
        if (leftContainerRef.current) observer.unobserve(leftContainerRef.current);
        if (rightContainerRef.current) observer.unobserve(rightContainerRef.current);
        if (centerContainerRef.current) observer.unobserve(centerContainerRef.current);
      }
      if (isMobile && centerContainerRef.current) {
        observer.unobserve(centerContainerRef.current);
      }
    };
  }, [isMobile]);

  const initializeInfiniteScroll = (container) => {
    let cardHeight = 0;
    const cards = container.querySelectorAll(".testimonial-md");
    cards.forEach((card) => {
      cardHeight += card.offsetHeight;
    });
  
    // Clone the cards and calculate the number of clones needed to fill the container
    const numClonesNeeded = Math.ceil(container.offsetHeight / cardHeight);
    const clonedCards = [];
    for (let i = 0; i < numClonesNeeded; i++) {
      cards.forEach((card) => {
        const clonedCard = card.cloneNode(true);
        clonedCards.push(clonedCard);
        container.appendChild(clonedCard);
      });
    }
  
    let scrollPosition = 0;
  
    const scrollContainer = () => {
      scrollPosition += 1;
      const maxScrollPosition = cardHeight * numClonesNeeded;
    
      // If scroll position exceeds the maximum, clone again and adjust the scroll position
      if (scrollPosition >= maxScrollPosition) {
        const excessScroll = scrollPosition - maxScrollPosition;
        scrollPosition = excessScroll;
        container.style.transition = 'transform 1s ease'; // Adjust duration and easing as needed
      } else {
        container.style.transition = 'none'; // Disable transition when not exceeding maxScrollPosition
      }
      container.style.transform = `translateY(-${scrollPosition}px)`;
    
      requestAnimationFrame(scrollContainer);
    };
    
  
    requestAnimationFrame(scrollContainer);
  };
  
  // Divide the testimonials into three parts
  const third = Math.ceil(testimonials.length / 3);
  const testimonialsLeft = testimonials.slice(0, third);
  const testimonialsCenter = testimonials.slice(third, 2 * third);
  const testimonialsRight = testimonials.slice(2 * third);

  return (
    <div className='testimonial-section'>
      <div className='blurred-section'></div>
      <div className='blurred-section-bottom'></div>
      {isMobile ? (
        <div className='testimonial-container' ref={centerContainerRef}>
          {testimonials.map((testimonial, index) => (
            <TestimonialMedium tweetId={testimonial.tweetId} key={`mobile_${index}`} />
          ))}
        </div>
      ) : (
        <>
          <div className='testimonial-container testimonial-left' ref={leftContainerRef}>
            {testimonialsLeft.map((testimonial, index) => (
              <TestimonialMedium tweetId={testimonial.tweetId} key={`left_${index}`} />
            ))}
          </div>
          <div className='testimonial-container testimonial-center' ref={centerContainerRef}>
            {testimonialsCenter.map((testimonial, index) => (
              <TestimonialMedium tweetId={testimonial.tweetId} key={`center_${index}`} />
            ))}
          </div>
          <div className='testimonial-container testimonial-right' ref={rightContainerRef}>
            {testimonialsRight.map((testimonial, index) => (
              <TestimonialMedium tweetId={testimonial.tweetId} key={`right_${index}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialSection;