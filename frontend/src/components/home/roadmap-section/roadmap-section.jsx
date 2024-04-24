import React from "react";
import "./roadmap-section.css";
import Roadmap from "./roadmap/roadmap";
import {motion} from 'framer-motion'
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";
import { useInView } from "react-intersection-observer";

const RoadmapSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Adjust threshold as needed (0.5 means 50% of the element is in view)
  });
  return (
    <section id="roadmap-section" ref={ref}>
      <div className="roadmap-section">
        <div className="section-title-wrapper roadmap-section-title-wrapper">
          <motion.h1 initial={{opacity: 0}} animate={{opacity:inView ? 1 : 0}} transition={{duration: 1}}  className="roadmap-section-title">
            A marketplace roadmap <br />
            where <span className="title-green">you</span> are{" "}
            <span className="title-priority title-blue">
              Priority #1.
              <CircleSquiggle width={308} height={107} style={{left: -15, top: -10, width: '110%'}} viewBox="0 0 308 93" d="M285.045 66.8485C194.363 78.0257 11.2703 88.9552 4.35686 43.2553C-4.28494 -13.8695 292.199 -2.91404 303.222 44.0786C310.558 75.3472 251.917 88.9498 231.828 88.3029" color="#22E393" />
            </span>
          </motion.h1>
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
