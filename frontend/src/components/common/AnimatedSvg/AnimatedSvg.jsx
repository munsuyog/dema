import React, { useRef } from "react";
import useIntersectionObserver from "../../../animations/useIntersectionObserver";

const AnimatedSVG = ({ className, children, ...props }) => {
  const targetRef = useIntersectionObserver((target) => {
    target.classList.remove('inactive');
    target.classList.add('active');
  }, {threshold: 0.5, once: true})

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`animated-svg ${className || ""}`}
      ref={targetRef}
      {...props}
    >
      {children}
    </svg>
  );
};

export default AnimatedSVG;
