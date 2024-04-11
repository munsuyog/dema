import CommunitySection from '../components/about-us/community-section/community-section'
import AboutHero from '../components/about-us/hero-section/hero-section'
import MissionSection from '../components/about-us/mission-section/mission-section'
import Roadmap from '../components/about-us/roadmap/roadmap'
import ShockerSection from '../components/about-us/shocker-section/shocker-section'
import TeamSection from '../components/about-us/team-section/team-section'
import ValuesSection from '../components/about-us/values-section/values-section'
import Footer from '../components/common/footer/footer'
import Navbar from '../components/common/navbar/navbar'
import { DeviceProvider } from '../utils/DeviceContext'
import React from 'react'

const AboutUs = () => {
  return (
    <DeviceProvider>
    <Navbar />
    <AboutHero />
    <Roadmap />
    <ShockerSection />
    <CommunitySection />
    <MissionSection />
    <ValuesSection />
    <TeamSection />
    <Footer />
    </DeviceProvider>
  )
}

export default AboutUs