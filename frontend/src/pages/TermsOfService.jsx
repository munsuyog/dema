import React from 'react'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import Footer from '../components/common/FooterComponent/FooterComponent'
import Tos from '../components/tos/Tos'

const TermsOfService = () => {
  return (
    <>
        <Navbar />
        <Tos page="toss" title="Terms of Service and Conditions of Use" />
        <Footer />
    </>
  )
}

export default TermsOfService