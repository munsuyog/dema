import React from 'react'
import Navbar from '../components/common/navbar/navbar'
import Footer from '../components/common/footer/footer'
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