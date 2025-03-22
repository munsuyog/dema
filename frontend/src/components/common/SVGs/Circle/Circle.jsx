import React from "react";

const CircleSVG = ({fill, style, className}) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <rect width="10" height="10" rx="4" fill={fill ? fill : "#F9C900"} />
    </svg>
  );
};

export default CircleSVG;
