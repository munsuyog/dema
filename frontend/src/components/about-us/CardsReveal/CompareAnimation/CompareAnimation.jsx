import React, { useState } from 'react'
import {motion} from 'framer-motion'
import CompareCard from './CompareCard/CompareCard'
import { amazonReceipt, demaReceipt } from './Receipt'
import { useDevice } from '../../../../contexts/DeviceContext'
import CompareCardMobile from './CompareCard/CompareCardMobile'

const CompareAnimation = ({scrollPercentage}) => {
  const {isMobile} = useDevice();
  if(isMobile) {
    return (
      <motion.div className='compare-animation'>
      <CompareCardMobile scrollPercentage={scrollPercentage} company="amazon" receipts={amazonReceipt} />
      <CompareCardMobile scrollPercentage={scrollPercentage} company="dema" receipts={demaReceipt} />
    </motion.div>
    )
  } else {
    return (
      <motion.div className='compare-animation'>
        <CompareCard scrollPercentage={scrollPercentage} company="amazon" receipts={amazonReceipt} />
        <CompareCard scrollPercentage={scrollPercentage} company="dema" receipts={demaReceipt} />
      </motion.div>
    )
  }
}

export default CompareAnimation