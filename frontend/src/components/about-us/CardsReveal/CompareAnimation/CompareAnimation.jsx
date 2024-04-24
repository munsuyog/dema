import React, { useState } from 'react'
import {motion} from 'framer-motion'
import CompareCard from './CompareCard/CompareCard'
import { amazonReceipt, demaReceipt } from './Receipt'

const CompareAnimation = () => {
  return (
    <motion.div className='compare-animation'>
      <CompareCard company="amazon" receipts={amazonReceipt} />
      <CompareCard company="dema" receipts={demaReceipt} />
    </motion.div>
  )
}

export default CompareAnimation