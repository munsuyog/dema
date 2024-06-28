import React from 'react'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import SellersHero from '../components/sellers/HeroSection/HeroSection'
import FeaturesSection from '../components/sellers/FeaturesSection/FeaturesSection'
import MakingYourDecisionEasier from '../components/sellers/MakingYourOwn/MakingYourOwn'
import ExperienceSection from '../components/sellers/ExperienceSection/ExperienceSection'
import Connectstore from '../components/sellers/ConnectStore/ConnectStore'
import LinkStore from '../components/sellers/LinkStore/LinkStore'
import Footer from '../components/common/FooterComponent/FooterComponent'
import RoadmapSection from '../components/sellers/RoadmapSection/RoadmapSection'
import { DeviceProvider } from '../contexts/DeviceContext'
import '../components/sellers/responsive.css'

const Sellers = () => {
  return (
    <DeviceProvider>
        <Navbar />
        <SellersHero />
        {/* <FeaturesSection /> */}
        <RoadmapSection />
        <MakingYourDecisionEasier />
        <ExperienceSection />
        <Connectstore />
        <LinkStore />
        <Footer />
    </DeviceProvider>
  )
}

export default Sellers