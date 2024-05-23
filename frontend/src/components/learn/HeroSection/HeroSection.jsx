import React from 'react'
import './HeroSection.css'
import ButtonPrimary from '../../common/ButtonPrimary/ButtonPrimary'
import TitleBadge from '../../common/TitleBadge/TitleBadge'
import { useDevice } from '../../../contexts/DeviceContext'

const LearnHero = () => {
    const {device} = useDevice();
  return (
    <section id='learn-hero'>
        <div className='learn-hero section-padding'>
            <div className='learn-hero-title'>
                <div className='learn-title-badge-wrapper'>
                    <TitleBadge title="Learn Hub" secondary />
                </div>
                <div className='learn-hero-title-section'>
                    <div className='learn-hero-title-wrapper'>
                        <h1>
                            Get to know <span className='title-dema'>d<span className='title-blue'>e</span>ma</span>
                        </h1>
                    </div>
                    <p className='learn-hero-subtitle'>Your educational guide to Decentralised e-commerce. Learn how Dema works, how we reduce costs, how everyone benefits, what is Dema wallet,  what is on-chain reputation, how and why they are critical to a well functioning marketplace. </p>
                    <ButtonPrimary text="Let's Get Started" link="#" width={device != 'desktop' ? "250px" : "25%"} fontSize={device != "desktop" ? "12px" : "14px"} />
                </div>
            </div>
            <img src="/images/learn/hero-section/learn-banner.svg" width={550} height={550} alt='learn-badge' className='learn-hero-banner' />
            <img src="/images/learn/hero-section/learn-squiggle.svg" width={156} height={109} alt='learn-squiggle' className='learn-hero-squiggle' />
        </div>
    </section>
  )
}

export default LearnHero