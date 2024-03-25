import Footer from '@/components/common/footer/footer'
import Navbar from '@/components/common/navbar/navbar'
import LearnHero from '@/components/learn/hero-section/hero-section'
import LearnSection from '@/components/learn/learn-section/learn-section'
import React from 'react'

const Learn = () => {
  return (
    <>
    <Navbar />
    <LearnHero />
    <LearnSection />
    <Footer />
    </>
  )
}

export default Learn