'use client'
import React, { useEffect, useState } from 'react';
import './download-button.css';
import Image from 'next/image';
import IOSQR from './ios-qr/ios-qr';
import AndroidQR from './android-qr/android-qr';
import gsap from 'gsap';


const DownloadButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div id='download-btn' className={isModalOpen ? '' : "active"} onClick={toggleModal}>
        <div className='download-btn-front-border'>
          <div className='download-btn-front'>
            <div className='download-btn-front-qr'>
              <Image src="/images/common/navbar/qr.svg" width={48} height={48} className='qr-image' />
            </div>
            <div className='download-btn-title-wrapper'>
              <Image src="/images/common/navbar/squiggle.svg" width={55} height={18} className='squiggle-arrow' />
              <Image src="/images/common/navbar/triangle.svg" width={18} height={18} className='triangle-image' />
              <div className='download-btn-title-container'>
                <Image src="/images/common/navbar/arrow-text.svg" width={30} height={24} className='arrow-text-image' />
                <div className='download-btn-title'>Download</div>
              </div>
            </div>
          </div>
        </div>
        <div className='download-btn-back-border'>
          <div className='download-btn-back'></div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='close-btn'>
            <span onClick={toggleModal} className='close-btn-text'>&times;</span>
            </div>
            <div className='modal-qr-wrapper'>
              <IOSQR />
              <AndroidQR />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DownloadButton;
