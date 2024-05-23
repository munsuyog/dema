import React from 'react'
import Navbar from '../components/common/NavbarComponent/NavbarComponent'
import Footer from '../components/common/FooterComponent/FooterComponent'
import Tos from '../components/tos/Tos'

const Privacy = () => {
  return (
    <>
        <Navbar />
            <Tos page="privacies" title="Privacy" />
        <Footer />
    </>
  )
}

export default Privacy