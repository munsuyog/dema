import React from 'react'
import './Insights.css'

const SellersInsights = () => {
  return (
    <div className='sellers-insights'>
        <div className='sellers-insights-wrapper'>
            <h3 className='sellers-insights-value'>
            $1.1B
            </h3>
            <p>Waitlisted Seller GMV</p>
        </div>
        <div className='sellers-insights-divider'></div>
        <div className='sellers-insights-wrapper'>
            <h3 className='sellers-insights-value'>
                180
            </h3>
            <p>Sellers in Network</p>
        </div>
        <div className='sellers-insights-divider'></div>
        <div className='sellers-insights-wrapper'>
            <h3 className='sellers-insights-value'>112,954</h3>
            <p>Product Listings</p>
        </div>
    </div>
  )
}

export default SellersInsights