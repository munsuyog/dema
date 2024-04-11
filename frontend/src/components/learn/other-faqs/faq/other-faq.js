import React, { useState } from 'react'
import './other-faq.css'
import Image from 'next/image';

const OtherFAQ = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`learn-other-faq ${isOpen ? 'active' : ''}`}>
        <div className='learn-other-faq-header' onClick={() => {setIsOpen(!isOpen)}}>
            <h5 className='learn-other-faq-title'>{faq.attributes.title}</h5>
            <Image src="/images/learn/learn-section/faq/subfaq-dropdown.svg" width={30} height={30} className={isOpen ? 'learn-other-subfaq-dropdown active' : 'learn-other-subfaq-dropdown'} alt='dropdown' />
        </div>
        <div className={isOpen ? 'learn-other-faqs-wrapper active' : 'learn-other-faqs-wrapper'}>
            {
                faq.attributes.faq.length > 0 && faq.attributes.faq.map((subfaq, index) => (
                    <SubFAQ faq={subfaq} key={index} />
                ))
            }
        </div>
        <Image src="/images/learn/learn-section/faq/leaf-arrow.svg" width={54} height={149} className={isOpen ? 'learn-other-subfaq-leaf-arrow active' : 'learn-other-subfaq-leaf-arrow'} alt='dropdown' />
        
    </div>
  )
}

const SubFAQ = ({faq}) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(faq)
    return (
        <div className={isOpen ? 'learn-other-subfaq active' : 'learn-other-subfaq'}>
            <div className='learn-other-subfaq-header' onClick={() => {setIsOpen(!isOpen)}}>
                <Image src="/images/learn/learn-section/faq/subfaq-dropdown.svg" width={24} height={24} className={isOpen ? 'learn-other-subfaq-dropdown active' : 'learn-other-subfaq-dropdown'} alt='dropdown' />
                <p className='learn-other-subfaq-question'>{faq.question}</p>
            </div>
            <div className={isOpen ? 'learn-other-subfaq-answer-wrapper active' : 'learn-other-subfaq-answer-wrapper'}>
                <p className='learn-other-subfaq-answer'>{faq.answer}</p>
            </div>
        </div>
    );
}

export default OtherFAQ