import React from 'react'
import Navbar from '../components/common/navbar/navbar'
import Footer from '../components/common/footer/footer'
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