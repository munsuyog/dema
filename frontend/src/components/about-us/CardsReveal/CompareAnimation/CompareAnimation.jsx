import React, { useState } from 'react'
import {motion} from 'framer-motion'
import CompareCard from './CompareCard/CompareCard'
import { amazonReceipt, demaReceipt } from './Receipt'

const CompareAnimation = ({scrollPercentage}) => {
  return (
    <motion.div className='compare-animation'>
      <CompareCard scrollPercentage={scrollPercentage} company="amazon" receipts={amazonReceipt} />
      <CompareCard scrollPercentage={scrollPercentage} company="dema" receipts={demaReceipt} />
    </motion.div>
  )
}

export default CompareAnimation