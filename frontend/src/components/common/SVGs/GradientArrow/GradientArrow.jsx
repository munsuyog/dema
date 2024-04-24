import React from 'react'
import AnimatedSVG from '../../AnimatedSvg/AnimatedSvg'

const GradientArrow = () => {
  return (
    <AnimatedSVG className="inactive" width="187" height="97" viewBox="0 0 187 97" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path         time="1s"
        style={{ "--L": 300, "--time": "1s" }} className='tracePath' d="M4 30.8613C37.8142 110.659 127 37.7604 80 30.8613C33 23.9622 63 103.861 182 62.8612" stroke="url(#paint0_linear_2571_6271)" stroke-width="8" stroke-linecap="round"/>
    <path         time="1s"
        style={{ "--L": 50, "--time": "1s", "--delay": "1s" }} delay="1s" className='tracePath delayed' d="M169.432 55.4238C169.432 55.4238 181.518 59.0811 182.5 63.501C183.5 68.001 174.628 76.5131 174.628 76.5131" stroke="#3830C9" stroke-width="8" stroke-linecap="round"/>
    <defs>
    <linearGradient id="paint0_linear_2571_6271" x1="191" y1="42.3613" x2="-10.5" y2="42.4644" gradientUnits="userSpaceOnUse">
    <stop offset="0.415" stop-color="#3830C9"/>
    <stop offset="0.815" stop-color="#22E393"/>
    </linearGradient>
    </defs>
    </AnimatedSVG>
  )
}

export default GradientArrow