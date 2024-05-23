import React from 'react'
import './FooterComponent.css'

const Footer = () => {
  return (
    <footer id='footer'>
        <div className='footer fixed-width'>
            <div className='footer-logo-container'>
                <a href="/"><img src="/images/common/footer/logo.svg" width={183} height={124} alt='logo' className='footer-logo' /></a>
            </div>
            <div className='footer-links-container'>
                <div className='footer-links-col'>
                    <div className='footer-links-social'>
                        <div className='footer-title'>
                            Social
                        </div>
                        <div className='footer-social-icons'>
                            <a href='#'><img src="/images/common/footer/social-twitter.svg" width={50} height={50} alt='twitter' /></a>
                            <a href='#'><img src="/images/common/footer/social-telegram.svg" width={50} height={50} alt='twitter' /></a>
                            <a href='#'><img src="/images/common/footer/social-linkedin.svg" width={50} height={50} alt='twitter' /></a>
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
                            <a href='/learn'>Learn</a>
                    </div>
                    <div className='footer-link'>
                            <a href='/about-us'>About</a>
                    </div>
                    <div className='footer-link'>
                            <a href='/blog'>Blog</a>
                    </div>
                    <div className='footer-link'>
                            <a href='#'>Sell on <span className='title-dema'>dema</span></a>
                    </div>
                </div>
                <div className='footer-links-col'>
                    <div className='footer-title'>Legal</div>
                    <div className='footer-link'>
                            <a href='/termsofservice'>TOS</a>
                    </div>
                    <div className='footer-link'>
                            <a href='/privacy'>Privacy</a>
                    </div>
                    <div className='footer-link'>
                            <a href='/pricing'>Pricing</a>
                    </div>
                    <div className='footer-link'>
                            <a href='/returns'>Returns</a>
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