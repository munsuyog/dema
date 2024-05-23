import React from 'react'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import Footer from '../components/common/FooterComponent/FooterComponent'
import Tos from '../components/tos/Tos'

const Shipping = () => {
  return (
    <>
        <Navbar />
            <Tos page="shippings" title="Shipping" />
        <Footer />
    </>
  )
}

export default Shipping