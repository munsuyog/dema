import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import LearnHero from '../components/learn/hero-section/hero-section'
import LearnSection from '../components/learn/learn-section/learn-section'
import Footer from '../components/common/footer/footer'
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