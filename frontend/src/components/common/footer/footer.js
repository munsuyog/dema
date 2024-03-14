import React from 'react'
import './footer.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footer'>
            <div className='footer-logo-container'>
                <Image src="/images/common/footer/logo.svg" width={183} height={124} alt='logo' className='footer-logo' />
            </div>
            <div className='footer-links-container'>
                <div className='footer-links-col'>
                    <div className='footer-links-social'>
                        <div className='footer-title'>
                            Social
                        </div>
                        <div className='footer-social-icons'>
                            <a href='#'><Image src="/images/common/footer/social-twitter.svg" width={50} height={50} alt='twitter' /></a>
                            <a href='#'><Image src="/images/common/footer/social-telegram.svg" width={50} height={50} alt='twitter' /></a>
                            <a href='#'><Image src="/images/common/footer/social-linkedin.svg" width={50} height={50} alt='twitter' /></a>
                        </div>
                    </div>
                    <div className='footer-link-contact'>
                        <div className='footer-title'>
                            Contact Us
                        </div>
                        <div className='footer-link'>
                            <a href='#'>hello@dema.shop</a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='footer-links-row'>
                    <div className='footer-links-col'>
                    <div className='footer-title'>Explore</div>
                    <div className='footer-link'>
                            <a href='#'>Protocol</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Learn</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>About</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Blog</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Sell on <span className='title-dema'>d<span className='title-blue'>e</span>ma</span></a>
                    </div>
                </div>
                <div className='footer-links-col'>
                    <div className='footer-title'>Legal</div>
                    <div className='footer-link'>
                            <a href='#'>TOS</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Privacy</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Pricing</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Shipping</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Returns</a>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <p>© 2024 Dema Platforms. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer