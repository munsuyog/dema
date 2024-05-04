import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { uberReceipt, demaReceipt } from './Receipt'
import './CompareAnimation.css'
import ReceiptCard from './ReceiptCard/ReceiptCard'

const CompareAnimationCommunity = ({scrollPercentage}) => {
  return (
    <motion.div className='compare-animation-community'>
      <ReceiptCard scrollPercentage={scrollPercentage} company="uber" receipt={uberReceipt} />
      <ReceiptCard scrollPercentage={scrollPercentage} company="dema" receipt={demaReceipt} />
    </motion.div>
  )
}

export default CompareAnimationCommunity