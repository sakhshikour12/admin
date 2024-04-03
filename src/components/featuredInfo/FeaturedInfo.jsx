import React from 'react'
import './featuredInfo.css'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredItemTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <i className="featurdIcon negative fa-solid fa-arrow-down"></i></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredItemTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4,415</span>
                <span className="featuredMoneyRate">-1.4 <i className="featurdIcon negative fa-solid fa-arrow-down"></i></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
            <span className="featuredItemTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+2.4 <i className="featurdIcon fa-solid fa-arrow-up"></i></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
      
    </div>
  )
}
