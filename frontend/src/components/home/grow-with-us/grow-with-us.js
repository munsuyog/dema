import React from 'react'
import './grow-with-us.css'
import Image from 'next/image'
import UltimateExperience from './ultimate-experience/ultimate-experience'

const GrowWithUs = () => {
  return (
    <section id='grow-with-us'>
        <div className='grow-with-us section-padding'>
            {/* <div className='section-title-wrapper'>
                <h2 className='grow-with-us-title'>We’re growing! Grow with us!</h2>
            </div>
            <div className='grow-with-us-container'>
                <div className='grow-with-us-stats'>
                    <div className='grow-with-us-users-stat'>
                        <div className='stats-header'>
                            <Image src="/images/home/grow-with-us/user-stats-header.svg" width={60} height={60} alt='user' className='user-stats-header-image' />
                            <div className='stats-title'>
                                <div className='stats-number'>
                                    12k+
                                </div>
                                <div className='stats-type'>
                                    Users
                                </div>
                            </div>
                        </div>
                        <Image src="/images/home/grow-with-us/live.svg" width={58} height={28} alt='live-vector' className='live-vector' />
                        <Image src="/images/home/grow-with-us/star-vector.svg" width={28} height={32} alt='star-vector' className='star-vector' />
                        <Image src="/images/home/grow-with-us/star-light-vector.svg" width={37} height={42} alt='star-vector' className='star-light-vector' />
                        <Image src="/images/home/grow-with-us/flower-light-vector.svg" width={42} height={47} alt='flower-light-vector' className='flower-light-vector-1' />
                        <Image src="/images/home/grow-with-us/flower-light-vector.svg" width={42} height={47} alt='flower-light-vector' className='flower-light-vector-2' />
                        <Image src="/images/home/grow-with-us/users-stats.svg" width={400} height={103} alt='stats' className='users-stats-image' />
                    </div>
                </div>
                <div className='grow-with-us-stats'>
                    <div className='grow-with-us-purchases-stat'>
                        <div className='stats-header'>
                            <Image src="/images/home/grow-with-us/purchases-stats.svg" width={60} height={60} alt='user' className='user-stats-header-image' />
                            <div className='stats-title'>
                                <div className='stats-number'>
                                    50.9k+
                                </div>
                                <div className='stats-type'>
                                    Purchases
                                </div>
                            </div>
                        </div>
                        <Image src="/images/home/grow-with-us/live.svg" width={58} height={28} alt='live-vector' className='live-vector' />
                        <Image src="/images/home/grow-with-us/star-vector.svg" width={28} height={32} alt='star-vector' className='star-vector' />
                        <Image src="/images/home/grow-with-us/flower-light-vector.svg" width={31} height={35} alt='flower-light-vector' className='flower-light-vector-1' />
                        <Image src="/images/home/grow-with-us/purchases-chart.svg" width={400} height={125} alt='stats' className='users-stats-image' />
                    </div>
                </div>
                <div className='grow-with-us-stats'>
                    <div className='grow-with-us-savings-stat'>
                        <div className='stats-header'>
                            <Image src="/images/home/grow-with-us/savings-vector.svg" width={60} height={60} alt='user' className='user-stats-header-image' />
                            <div className='stats-title'>
                                <div className='stats-number'>
                                    30k+
                                </div>
                                <div className='stats-type'>
                                    Savings
                                </div>
                            </div>
                        </div>
                        <Image src="/images/home/grow-with-us/live.svg" width={58} height={28} alt='live-vector' className='live-vector' />
                        <Image src="/images/home/grow-with-us/star-vector.svg" width={28} height={32} alt='star-vector' className='star-vector' />
                        <Image src="/images/home/grow-with-us/flower-light-vector.svg" width={42} height={47} alt='flower-light-vector' className='flower-light-vector-1' />
                        <Image src="/images/home/grow-with-us/flower-light-vector.svg" width={42} height={47} alt='flower-light-vector' className='flower-light-vector-2' />
                        <Image src="/images/home/grow-with-us/savings-chart.svg" width={400} height={117} alt='stats' className='users-stats-image' />
                    </div>
                </div>
            </div>
            <a href='#' className='text-checkout'>Checkout out the dashboard</a> */}
            <div className='ultimate-experience-wrapper'>
                <UltimateExperience />
                <Image src="/images/home/grow-with-us/ultimate-experience/arrow-top.svg" width={130} height={126} className='ultimate-arrow-top' alt='arrow' />
                <Image src="/images/home/grow-with-us/ultimate-experience/arrow-left.svg" width={53} height={150} className='ultimate-arrow-left' alt='arrow' />
                <Image src="/images/home/grow-with-us/ultimate-experience/squiggle.svg" width={190} height={152} className='ultimate-squiggle' alt='arrow' />
            </div>
        </div>
    </section>
  )
}

export default GrowWithUs