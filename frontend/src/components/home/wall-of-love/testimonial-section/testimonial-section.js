import React, { useState, useEffect } from "react";
import "./testimonial-section.css";
import { Tweet } from "react-tweet";
import { getTweet } from "react-tweet/api";
import TestimonialMedium from "./testimonial-md";
import TestimonialSmall from "./testimonial-sm";
import TestimonialLarge from "./testimonial-lg";
import TestimonialXS from "./testimonial-xs";

const TestimonialSection = ({ testimonials }) => {
  // State variables to store testimonials for each size category
  const [smallTestimonials, setSmallTestimonials] = useState([]);
  const [mediumTestimonials, setMediumTestimonials] = useState([]);
  const [largeTestimonials, setLargeTestimonials] = useState([]);
  const [extraSmallTestimonials, setExtraSmallTestimonials] = useState([]);

  useEffect(() => {
    // Categorize testimonials based on size
    if (testimonials) {
      const small = [];
      const medium = [];
      const large = [];
      const extraSmall = [];

      testimonials.forEach(testimonial => {
        const { size, tweetId } = testimonial;
        switch (size) {
          case "small":
            small.push(<TestimonialSmall key={tweetId} tweetId={tweetId} />);
            break;
          case "medium":
            medium.push(<TestimonialMedium key={tweetId} tweetId={tweetId} />);
            break;
          case "large":
            large.push(<TestimonialLarge key={tweetId} tweetId={tweetId} />);
            break;
          case "extra-small":
            extraSmall.push(<TestimonialXS key={tweetId} tweetId={tweetId} />);
            break;
          default:
            // Do nothing for unknown sizes
            break;
        }
      });

      // Update state variables with categorized testimonials
      setSmallTestimonials(small);
      setMediumTestimonials(medium);
      setLargeTestimonials(large);
      setExtraSmallTestimonials(extraSmall);
    }
  }, [testimonials]);

  // State variables to track the index of currently displayed testimonials
  const [currentMediumIndex, setCurrentMediumIndex] = useState(0);
  const [currentSmallIndex, setCurrentSmallIndex] = useState(0);
  const [currentExtraSmallIndex, setCurrentExtraSmallIndex] = useState(0);
  const [currentLargeIndex, setCurrentLargeIndex] = useState(0);
  useEffect(() => {
    // Function to rotate medium and small testimonials every 5 seconds
    const rotateTestimonials = setInterval(() => {
      setCurrentMediumIndex(prevIndex => (prevIndex + 1) % mediumTestimonials.length);
    }, 5000);
  
    const loadSmallTestimonials = setInterval(() => {
      setCurrentSmallIndex(prevIndex => (prevIndex + 1) % smallTestimonials.length);
    }, 5000);
  
    // Function to load different extra small testimonials every 5 seconds
    const loadExtraSmallTestimonials = setInterval(() => {
      setCurrentExtraSmallIndex(prevIndex => (prevIndex + 2) % extraSmallTestimonials.length);
    }, 6000);
  
    const loadLargeTestimonials = setInterval(() => {
      setCurrentLargeIndex(prevIndex => (prevIndex + 1) % largeTestimonials.length);
    }, 6000);
  
    return () => {
      clearInterval(rotateTestimonials);
      clearInterval(loadExtraSmallTestimonials);
      clearInterval(loadSmallTestimonials);
      clearInterval(loadLargeTestimonials);
    };
  }, [mediumTestimonials, smallTestimonials, extraSmallTestimonials, largeTestimonials]);
  

  return (
    testimonials && (
      <div className="testimonial-section">
        <div className="testimonial-row">
          {mediumTestimonials[currentMediumIndex]}
          {smallTestimonials[currentSmallIndex]}
        </div>
        <div className="testimonial-row">
          {largeTestimonials[currentLargeIndex]}
          <div className="testimonial-sub-row">
            {/* Render two extra-small size testimonials */}
            {extraSmallTestimonials[currentExtraSmallIndex]}
            {extraSmallTestimonials[(currentExtraSmallIndex + 1) % extraSmallTestimonials.length]}
          </div>
        </div>
        <div className="testimonial-row">
          {mediumTestimonials[(currentMediumIndex + 1) % mediumTestimonials.length]}
          {smallTestimonials[(currentSmallIndex + 1) % smallTestimonials.length]}
        </div>
      </div>
    )
  );
};

export default TestimonialSection;
