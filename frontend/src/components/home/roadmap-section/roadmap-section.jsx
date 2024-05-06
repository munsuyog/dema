import React from "react";
import "./roadmap-section.css";
import Roadmap from "./roadmap/roadmap";
import {motion} from 'framer-motion'
import CircleSquiggle from "../../common/SVGs/CircleSquiggle/CircleSquiggle";

const RoadmapSection = () => {
  return (
    <section id="roadmap-section">
      <div className="roadmap-section">
        <Roadmap />
      </div>
    </section>
  );
};

export default RoadmapSection;
