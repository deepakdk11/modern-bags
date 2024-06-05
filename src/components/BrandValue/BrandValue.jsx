import React from 'react'
import './BrandValue.css'
import { value } from '../../assets/assets.js'

const BrandValue = () => {
  return (
    <div className='brandContainer' >
      <h2>WHY TO BUY FROM US</h2>
      <div className='values' >
        <div className='delivery'>
            <img src={value.delivery} alt="delivery icon" />
            <p>Free Shipping</p>
        </div>
        <div className='payment'>
            <img src={value.payment} alt="Payment Icon" />
            <p>Secure Payment</p>
        </div>
        <div className='warranty'>
            <img src={value.warranty} alt="Warranty Icon" />
            <p>Brand Warranty</p>
        </div>
        <div className='genuine'>
            <img src={value.genuine} alt="Genuine icon" />
            <p>Genuine Products</p>
        </div>
      </div>
    </div>
  )
}

export default BrandValue
