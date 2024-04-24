import React from "react";
import "./roadmap-section.css";
import Roadmap from "./roadmap/roadmap";
import {motion} from 'framer-motion'
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";

const RoadmapSection = () => {
  return (
    <section id="roadmap-section">
      <div className="roadmap-section">
        <div className="section-title-wrapper roadmap-section-title-wrapper">
          {/* <img
            src="/images/home/roadmap-section/squiggle.svg"
            width={84}
            height={131}
            className="roadmap-squiggle"
        />
          <img
            src="/images/home/roadmap-section/flower-vector.svg"
            width={40}
            height={45}
            className="roadmap-flower"
        />
          <img
            src="/images/home/roadmap-section/star-light.svg"
            width={40}
            height={45}
            className="roadmap-star-light"
        /> */}
        </div>
        <Roadmap />
      </div>
    </section>
  );
};

export default RoadmapSection;
