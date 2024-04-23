import React, { useState } from 'react'
import './CompareAnimation.css'
import {motion} from 'framer-motion'
import { CompareAnimationVectors } from '../../../../constants/VectorSVGs'
import CompareCard from './CompareCard/CompareCard'
import { amazonReceipt, demaReceipt } from './Receipt'

const CompareAnimation = () => {
  const [amazonFees, setAmazonFees] = useState(0);
  const [demaFees, setDemaFees] = useState(0);


  return (
    <motion.div className='compare-animation'>
      <CompareCard company="amazon" receipts={amazonReceipt} />
      <CompareCard company="dema" receipts={demaReceipt} />
    </motion.div>
  )
}

export default CompareAnimation