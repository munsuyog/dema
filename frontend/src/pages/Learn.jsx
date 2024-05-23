import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import LearnHero from '../components/learn/HeroSection/HeroSection'
import LearnSection from '../components/learn/LearnSection/LearnSection'
import Footer from '../components/common/FooterComponent/FooterComponent'
import { DeviceProvider } from '../contexts/DeviceContext'
import React from 'react'

const Learn = () => {
  return (
    <DeviceProvider>
    <Navbar noFixedWidth />
    <LearnHero />
    <LearnSection />
    <Footer />
    </DeviceProvider>
  )
}

export default Learn