import React from 'react'
import './hero-section.css'
import Image from 'next/image'
import ButtonPrimary from '@/components/common/button-primary/button-primary'
import TitleBadge from '@/components/common/title-badge/title-badge'

const LearnHero = () => {
  return (
    <section id='learn-hero'>
        <div className='learn-hero section-padding'>
            <div className='learn-hero-title'>
                <div>
                    <TitleBadge title="Learn Hub" secondary />
                </div>
                <div className='learn-hero-title-section'>
                    <div className='learn-hero-title-wrapper'>
                        <h1>
                            Get to know <span className='title-dema'>d<span className='title-blue'>e</span>ma</span>
                        </h1>
                    </div>
                    <p className='learn-hero-subtitle'>What is de-centralized e-commerce? How does it work? Why is it needed? All this and more... </p>
                    <ButtonPrimary text="Let's Get Started" link="#" width="25%" />
                </div>
            </div>
            <Image src="/images/learn/hero-section/learn-banner.svg" width={550} height={550} alt='learn-badge' className='learn-hero-banner' />
            <Image src="/images/learn/hero-section/learn-squiggle.svg" width={156} height={109} alt='learn-squiggle' className='learn-hero-squiggle' />
        </div>
    </section>
  )
}

export default LearnHero