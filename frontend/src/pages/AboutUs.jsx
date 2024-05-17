import CardsReveal from '../components/about-us/CardsReveal/CardsReveal'
import CommunitySection from '../components/about-us/CommunitySection/CommunitySection'
import AboutHero from '../components/about-us/hero-section/hero-section'
import MissionSection from '../components/about-us/mission-section/mission-section'
import Roadmap from '../components/about-us/roadmap/roadmap'
import ShockerSection from '../components/about-us/ShockerSection/ShockerSection'
import TeamSection from '../components/about-us/team-section/team-section'
import ValuesSection from '../components/about-us/values-section/values-section'
import Footer from '../components/common/footer/footer'
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