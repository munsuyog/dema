import React from 'react'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import Footer from '../components/common/FooterComponent/FooterComponent'
import Tos from '../components/tos/Tos'

const Pricing = () => {
  return (
    <>
        <Navbar />
            <Tos page="pricings" title="Pricing" />
        <Footer />
    </>
  )
}

export default Pricing