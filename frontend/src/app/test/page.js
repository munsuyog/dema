'use client'
import React, {useState, useRef} from 'react'
import './test.css'


const Test = () => {
  const [width, setWidth] = useState(100);
  const top = useRef(null);
  const box = useRef(null);
  const dragger = useRef(null)
  const widthAdjust = (e) => {
    const initialX = box.current.getBoundingClientRect().left;
    const currentX = e.clientX;
    const boxWidth = box.current.clientWidth;
  
    let newWidthPercentage;
  
    if (currentX >= initialX) {
      // Mouse moving to the right
      newWidthPercentage = ((currentX - initialX) / boxWidth) * 100;
      setWidth(newWidthPercentage)
    } else {
      // Mouse moving to the left
      const difference = initialX - currentX;
      newWidthPercentage = ((boxWidth - difference) / boxWidth) * 100;
      setWidth(newWidthPercentage)
    }
  
    // Ensure the width stays within certain bounds (1% to 100%)
    const clampedWidth = Math.max(Math.min(newWidthPercentage, 100), 1);
  
    top.current.style.width = `${clampedWidth}%`;
  };

  const handleDragStart = (e) => {
    e.preventDefault(); // Prevent default touch event behavior
    const touch = e.touches[0];
    dragger.current.initialX = touch.clientX;
    dragger.current.initialWidth = parseFloat(getComputedStyle(top.current).width);
  };

  const handleDragMove = (e) => {
    e.preventDefault(); // Prevent default touch event behavior
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragger.current.initialX;
    let newWidth = dragger.current.initialWidth + deltaX;
    newWidth = Math.max(Math.min(newWidth, box.current.clientWidth), 0); // Ensure width is within bounds
    setWidth((newWidth / box.current.clientWidth) * 100);
    top.current.style.width = `${newWidth}px`;
  };

  const handleDragEnd = () => {
    // Reset references
    dragger.current.initialX = null;
    dragger.current.initialWidth = null;
  };
  
  return (
    <div className='test'  onMouseMove={(e) => {widthAdjust(e)}} ref={box}>
      <div
        className="dragger"
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        ref={dragger}
        style={{left: `${width}%`}}
      ></div>

        <div className='top' ref={top}>
          <div className='top-child'>
            Top
          </div>
        </div>
        <div className='bottom'>Bottom</div>
    </div>
  )
}

export default Test