import React from 'react'
import './items-section.css'

const ItemsSection = () => {
  return (
    <section id='items-section'>
        <div className='items-section section-padding fixed-width'>
            <div className='items-wrapper'>
                <img src="/images/home/items-section/heart.svg" width={567} height={524} className='heart-image' />
                <img src="/images/home/items-section/flower01.svg" width={42} height={42} className='flower-1' />
                <img src="/images/home/items-section/flower02.svg" width={40} height={40} className='flower-2' />
                <div className='items-image-wrapper'>
                    <video src="/images/home/items-section/items-section.mp4" autoPlay muted loop playsInline preload height={485} className='items-image'></video>
                </div>
                <div>
                    <div className='items-insights'>
                        <span>{">"}100M Items</span>
                        <div className='top-line'></div>
                        <div className='bottom-line'></div>
                        <div className='circle-top-left'></div>
                        <div className='circle-top-right'></div>
                        <div className='circle-bottom-left'></div>
                        <div className='circle-bottom-right'></div>
                        <img src="/images/home/items-section/vector01.svg" width={26} height={30} className='vector' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ItemsSection