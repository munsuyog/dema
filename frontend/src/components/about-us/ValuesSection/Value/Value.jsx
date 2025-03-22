import React, { useState } from "react";
import "./Value.css";
import { useDevice } from "../../../../contexts/DeviceContext";

const Value = ({ value, index }) => {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const {device} = useDevice();
  const [visible, setVisible] = useState(false);
  const colors = [
    "red",
    "var(--primary-500)",
    "var(--secondary-400)"
  ];

  // State to manage the index of the current color
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const handleMouseEnter = (index) => {
    // Generate a random index for color selection
    if(device == 'desktop') {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        setHoveredTitle(index);
        setCurrentColorIndex(randomColorIndex);
        setVisible(true);
    }
  };

  // Event handler for when the mouse leaves the title element
  const handleMouseLeave = (index) => {
    // Reset the color index to 0 (black)
    if(device == 'desktop') {
        setCurrentColorIndex(0);
        setHoveredTitle(index);
        setVisible(false);
    }
  };
  return (
    <div className="value">
      <h1
        className="value-title"
        style={{
          color:
            hoveredTitle === null
              ? `rgba(0, 0, 0, ${1 - index * 0.12})`
              : hoveredTitle === index
              ? colors[index % colors.length]
              : "rgba(0, 0, 0, 0.2)",
        }}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(null)}
      >
        {value.title}
      </h1>
      <p
        className="value-content"
        style={
          index == hoveredTitle ? { display: "block" } : { display: "none" }
        }
      >
        {value.content}
      </p>
    </div>
  );
};

export default Value;
