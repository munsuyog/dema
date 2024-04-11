import React from "react";
import "./roadmap-section.css";
import Roadmap from "./roadmap/roadmap";
import {motion} from 'framer-motion'

const RoadmapSection = () => {
  return (
    <section id="roadmap-section">
      <div className="roadmap-section">
        <div className="section-title-wrapper">
          <h1 className="roadmap-section-title">
            A marketplace roadmap <br />
            where <span className="title-green">you</span> are{" "}
            <span className="title-priority title-blue">
              Priority #1.
              <motion.svg width="308" height="107" viewBox="0 0 308 93" fill="none" xmlns="http://www.w3.org/2000/svg" className="priority-squiggle">
<motion.path initial={{pathLength: 0}} whileInView={{pathLength:1}} viewport={{once: true}} transition={{duration: 2}} d="M285.045 66.8485C194.363 78.0257 11.2703 88.9552 4.35686 43.2553C-4.28494 -13.8695 292.199 -2.91404 303.222 44.0786C310.558 75.3472 251.917 88.9498 231.828 88.3029" stroke="#22E393" stroke-width="8" stroke-linecap="round"></motion.path>
</motion.svg>

            </span>
          </h1>
          <img
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
        />
        </div>
        <Roadmap />
      </div>
    </section>
  );
};

export default RoadmapSection;
