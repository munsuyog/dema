import React from "react";
import AnimatedSVG from "../../AnimatedSvg/AnimatedSvg";
import "./CircleSquiggle.css";

const CircleSquiggle = ({color, viewBox, d, width, time, height,strokeWidth, ...props}) => {
  return (
    <AnimatedSVG
      width={width ? width : "475"}
      height={height ? height : "110"}
      viewBox={viewBox ? viewBox : "0 0 468 103"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="circle-squiggle inactive"
      {...props}
    >
      <path
        time={time ? time : "1s"}
        style={{ "--L": 1064.50000000000006, "--time":  time ? time : "1s" }}
        className="tracePath"
        d={d ? d :"M435.891 73.914C295.978 88.1643 13.646 103.396 3.61873 50.3189C-8.91536 -16.027 447.875 -7.35275 464.219 47.1716C475.095 83.4518 384.532 100.084 353.578 99.6072"}
        stroke={color}
        stroke-width={strokeWidth ? strokeWidth : "8"}
      />
    </AnimatedSVG>
  );
};

export default CircleSquiggle;
