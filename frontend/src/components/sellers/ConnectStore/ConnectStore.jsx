import React from 'react'
import { Link } from 'react-router-dom'
import "./ConnectStore.css"

export default function Connectstore() {
  return (
    <section className="setuprequired-main">
    <div className="container-fluid">
      <div className="setuprequirebox-main">
        <div className="setuprequired-pic">
          <img
            alt=""
            className="img-fluid"
            src="/images/sellers/connect-store//connectwith.jpg"
          />
        </div>
        <div className="setuprequired-details">
          <h1 className="title1">
            <span>Connect with your existing store.</span> No new setup
            required.
          </h1>
          <p className="habits">
            <label className="demafont">dema</label> integrates with ERPs &
            fulfillment systems you already use. With Amazon’s SP API
            already under out belt, we’re adding the top 25 APIs covering
            99% of all commerce transaction ERP systems by launch. So rest
            easy! Manage orders the way you do now!
          </p>
          <div className="think">
            <p>
              Think we’re missing yours?&nbsp;
              <strong>Tell us. It won’t take long to add it!</strong>
            </p>
            <Link to="faq#Sellers/Features" className="btn">
              learn more
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store/arrow-rightwhite.svg"
              />
            </Link>
          </div>
          <div className="allpiclarge">
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//amazonlogo.svg"
              />
            </div>
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//walmart.svg"
              />
            </div>
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//ebay.svg"
              />
            </div>
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//target.svg"
              />
            </div>
          </div>

          <div className="allpicsmall">
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Amazon_seller_central_logo.svg"
              />
            </div>
            <div className="picbox">
              <img style={{width:"70px"}}
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Shopify_logo.svg"
              />
            </div>
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Netsuite_logo.svg"
              />
            </div>
            <div className="picbox">
              <img
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Odoo_logo.svg"
              />
            </div>
            <div className="picbox">
              <img style={{width:"37px"}}
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Google_sheets_logo.svg"
              />
            </div>
            <div className="picbox">
              <img style={{width:"60px"}}
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//Brightpearl_logo.svg"
              />
            </div>
            <div className="picbox">
              <img style={{width:"70px"}}
                alt=""
                className="img-fluid"
                src="/images/sellers/connect-store//CIN7_logo.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
