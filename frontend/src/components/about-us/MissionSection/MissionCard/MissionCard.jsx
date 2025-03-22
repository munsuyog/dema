import React from 'react'
import './MissionCard.css'
import { motion } from 'framer-motion'

const MissionCard = ({mission}) => {
  return (
    <motion.div whileHover={{translateY: -20}} transition={{duration: 0.1}} className='mission-card' style={mission.background ? {background: mission.background} : {}}>
        <div className='mission-card-header'>
            <h2 dangerouslySetInnerHTML={{__html: mission.title}}></h2>
        </div>
        <div className='mission-card-container'>
            <p style={mission.background == 'var(--primary-500)' ? {color: 'black'} : {}}>{mission.desc}</p>
        </div>
    </motion.div>
  )
}

export default MissionCard