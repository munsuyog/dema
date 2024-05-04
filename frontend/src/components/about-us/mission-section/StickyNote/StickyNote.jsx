import React from 'react'
import './StickyNote.css'
import { motion } from 'framer-motion'

const StickyNote = ({note, background, delay}) => {
  return (
    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: delay ? delay : ""}} class="container">
  <div class="container-inner">
    <div class="sticky-container">
      <div class="sticky-outer">
        <div class="sticky">
          <svg width="0" height="0">
            <defs>
              <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
                <path
                      d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                      stroke-linejoin="round"
                      stroke-linecap="square"
                      />  
              </clipPath>
            </defs>
          </svg>
          <div class="sticky-content" style={background ? {background: background} : {}}>
            {note.note}
          </div>
        </div>
      </div>
    </div>
  </div>
</motion.div>
  )
}

export default StickyNote