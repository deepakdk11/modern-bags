import React, { useContext } from 'react'
import "./PlaceOrder.css"
import { DataContext } from "../../Context/DataContext";
import { courier } from '../../assets/assets';

const PlaceOrder = ({setPopup}) => {

    const {
        cartTotalAmount,
        cartTotalMRPAmount,
        cartTotalDiscountAmount
    } = useContext(DataContext);

  return (
    <div className='order-container'>
        <form action="" className='delivery-details'>
            <h1>Delivery Information</h1>
            <div className='orderLogin'>
                <p>Do you already have account <a href="#" style={{color:"blue"}} onClick={() => setPopup(true)}>login?</a></p>
            </div> 
            <input type="email" name="mail" id="mail" placeholder='Email ID' required />
            <div className="first-last">
                <input type="text" placeholder='First Name' required />
                <input type='text' placeholder='Last Name' required />
            </div>
            <input type="text" placeholder='Street' className='street' required />
            <div className="city-state">
                <input type="text" placeholder='City' required/>
                <input type="text" placeholder='State' required/>
            </div>
            <div className="pincode-country">
                <input type="text" placeholder='Pin Code' required/>
                <input type="text" placeholder='Country' required />
            </div>
            <input type="tel" name="Phone Number" id="phone" placeholder='Mobile Number' required />
            <label htmlFor='check-details-one' className='check-details'>
                <input type="checkbox" name="" id="check-details-one" />
                <p>Save my details for future purchase</p>
            </label>
            <label htmlFor='check-details-two' className='check-details'>
                <input type="checkbox" name="" id="check-details-two" />
                <p>Subscribe for exclusive  offers & coupons</p>
            </label>
            <button type='submit' className="checkout">PROCEED TO PAY</button>
        </form>
        <div className="order-last-container">
            <div className="shipping-method">
                <h3>Shipping method</h3>
                <label htmlFor="dhl" className='deliveryClass'>
                    <input type="checkbox" name="" id="dhl" defaultChecked/>
                    <p style={{color:"green"}}>Free</p>
                    <div>
                        <p>DHL</p>
                        <p>10-12 Business Days</p>
                    </div>
                    <img src={courier.dhl} alt="" className='dhl' />
                </label>
                <label htmlFor="delhivery" className='deliveryClass'>
                    <input type="checkbox" name="Delhivery" id="delhivery" />
                    <p>₹50</p>
                    <div>
                        <p>Delhivery</p>
                        <p>5-6 Business Days</p>
                    </div>
                    <img src={courier.delhivery} alt="" className='delhivery' />
                </label>
                <label htmlFor="blueDart" className='deliveryClass'>
                    <input type="checkbox" name="" id="blueDart" />
                    <p>₹75</p>
                    <div>
                        <p>Blue Dart</p>
                        <p>2-3 Business Days</p>
                    </div>
                    <img src={courier.blueDart} className='blueDart' alt="" />
                </label>
                <label htmlFor="DTDC" className='deliveryClass'>
                    <input type="checkbox" name="DTDC" id="DTDC" />
                    <p>₹100</p>
                    <div>
                        <p>DTDC</p>
                        <p>1-2 Business Days</p>
                    </div>
                    <img src={courier.DTDC} alt="" className='DTDC' />
                </label>
            </div>
            <div className="total-amount-container" id='total-amount-container-two'>
          <h3>Total Amount</h3>
          <div className="mrp-price sameClass">
            <p>MRP</p>
            <p>₹{cartTotalMRPAmount()}</p>
          </div>
          <hr />
          <div className="discount-price sameClass">
            <p>Discount</p>
            <p style={{color:"red"}}>-₹{cartTotalDiscountAmount()}</p>
          </div>
          <hr />
          <div className="delivery-fee sameClass">
            <p>Delivery</p>
            <p style={{color:"green"}}>Free</p>
          </div>
          <hr />
          <div className="total sameClass">
            <p>Total</p>
            <p>₹{cartTotalAmount()}</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default PlaceOrder
