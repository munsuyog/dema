import React from 'react'
import './GrowWithUs.css'
import SplitContainer from './SplitContainer/SplitContainer'
import { useDevice } from '../../../contexts/DeviceContext'

const GrowWithUs = () => {
    const {device} = useDevice();
  return (
    <section id='grow-with-us'>
        <div className={device != 'desktop' ? "grow-with-us" : 'grow-with-us'}>
            <div className='ultimate-experience-wrapper'>
                <SplitContainer />
                <img src="/images/home/grow-with-us/ultimate-experience/arrow-top.svg" width={130} height={126} className='ultimate-arrow-top' alt='arrow' />
                <img src="/images/home/grow-with-us/ultimate-experience/arrow-left.svg" width={53} height={150} className='ultimate-arrow-left' alt='arrow' />
                <img src="/images/home/grow-with-us/ultimate-experience/squiggle.svg" width={190} height={152} className='ultimate-squiggle' alt='arrow' />
            </div>
        </div>
    </section>
  )
}

export default GrowWithUs