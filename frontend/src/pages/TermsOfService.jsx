import React from 'react'
import Navbar from '../components/common/navbar/navbar'
import Footer from '../components/common/footer/footer'
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