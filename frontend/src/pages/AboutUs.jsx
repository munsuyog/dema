import CardsReveal from '../components/about-us/CardsReveal/CardsReveal'
import CommunitySection from '../components/about-us/CommunitySection/CommunitySection'
import AboutHero from '../components/about-us/HeroSection/HeroSection'
import MissionSection from '../components/about-us/MissionSection/MissionSection'
import ShockerSection from '../components/about-us/ShockerSection/ShockerSection'
import TeamSection from '../components/about-us/TeamSection/TeamSection'
import ValuesSection from '../components/about-us/ValuesSection/ValuesSection'
import Footer from '../components/common/FooterComponent/FooterComponent'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import { DeviceProvider } from '../contexts/DeviceContext'
import React from 'react'

const AboutUs = () => {
  return (
    <DeviceProvider>
    <Navbar />
    <AboutHero />
    <CardsReveal />
    <ShockerSection />
    <CommunitySection />
    <ValuesSection />
    <MissionSection />
    <TeamSection />
    <Footer />
    </DeviceProvider>
  )
}

export default AboutUs