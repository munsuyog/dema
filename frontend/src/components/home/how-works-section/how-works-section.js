import React from 'react'
import './how-works-section.css'
import Image from 'next/image'
import HowWorksFeatures from './how-works-features/how-works-features'

const HowWorksSection = () => {
  return (
    <section id='how-works-section'>
        <div className='how-works-section section-padding'>
            <div className='section-title-wrapper'>
                <h2 className='how-works-title'>How does it work?</h2>
                <Image src="/images/home/how-works-section/question-mark.svg" width={45} height={45} className="question-mark" />
                <Image src="/images/home/how-works-section/arrow.svg" width={200} height={200} className="arrow-vector" />
            </div>
            <div className='how-works-container'>
                <div className='how-works-image-container'>
                    <video src="/images/home/how-works-section/video.mp4" autoPlay muted loop width={600} />
                </div>
                <div className='how-works-features-wrapper'>
                    <HowWorksFeatures />
                    <Image src="/images/home/how-works-section/no-signup-squiggle.svg" width={150} height={90} className='no-signup-squiggle' />
                </div>
            </div>
            <Image src="/images/home/how-works-section/triangle-vector.svg" width={71} height={71} className='triangle-vector' />
            <Image src="/images/home/how-works-section/flower.svg" width={42} height={42} className='how-works-flower' />
        </div>
    </section>
  )
}

export default HowWorksSection