import React, { useState, useEffect } from "react";
import "./testimonial-section.css";
import { Tweet } from "react-tweet";

const TestimonialSection = ({ testimonials }) => {
  // Initialize variables to store testimonials for each size category
  let smallTestimonials = [];
  let mediumTestimonials = [];
  let largeTestimonials = [];
  let extraSmallTestimonials = [];

  // Loop through testimonials and categorize them based on size
  if (testimonials) {
    testimonials.forEach(testimonial => {
      const { size, tweetId } = testimonial;
      switch (size) {
        case "small":
          smallTestimonials.push(<Tweet id={tweetId} />);
          break;
        case "medium":
          mediumTestimonials.push(<Tweet id={tweetId} />);
          break;
        case "large":
          largeTestimonials.push(<Tweet id={tweetId} />);
          break;
        case "extra-small":
          extraSmallTestimonials.push(<Tweet id={tweetId} />);
          break;
        default:
          // Do nothing for unknown sizes
          break;
      }
    });
  }

  // State variables to track the index of currently displayed testimonials
  const [currentMediumIndex, setCurrentMediumIndex] = useState(0);
  const [currentSmallIndex, setCurrentSmallIndex] = useState(0);

  useEffect(() => {
    // Function to rotate medium and small testimonials every 5 seconds
    const rotateTestimonials = setInterval(() => {
      setCurrentMediumIndex((currentMediumIndex + 1) % mediumTestimonials.length);
      setCurrentSmallIndex((currentSmallIndex + 1) % smallTestimonials.length);
    }, 5000);

    return () => clearInterval(rotateTestimonials); // Cleanup interval on component unmount
  }, [currentMediumIndex, currentSmallIndex, mediumTestimonials.length, smallTestimonials.length]);

  return (
    testimonials && (
      <div className="testimonial-section">
        <div className="testimonial-row">
          {/* Render medium size testimonials */}
          <div className="testimonial-md" data-theme="light">
            {mediumTestimonials[currentMediumIndex]}
          </div>
          <div className="testimonial-sm" data-theme="light">
            {smallTestimonials[currentSmallIndex]}
          </div>
        </div>
        <div className="testimonial-row">
          {/* Render large size testimonials */}
          <div className="testimonial-lg" data-theme="light">
            {largeTestimonials[0]} {/* Only one large testimonial */}
          </div>
          <div className="testimonial-sub-row">
            {/* Render extra-small size testimonials */}
            {extraSmallTestimonials.map((testimonial, index) => (
              <div className="testimonial-xs" data-theme="light" key={index}>
                {testimonial}
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-row">
          {/* Render medium and small size testimonials */}
          <div className="testimonial-md" data-theme="light">
            {mediumTestimonials[(currentMediumIndex + 1) % mediumTestimonials.length]}
          </div>
          <div className="testimonial-sm" data-theme="light">
            {smallTestimonials[(currentSmallIndex + 1) % smallTestimonials.length]}
          </div>
        </div>
      </div>
    )
  );
};

export default TestimonialSection;
