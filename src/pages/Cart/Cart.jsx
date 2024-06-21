import React, { useContext } from "react";
import "./Cart.css";
import { DataContext } from "../../Context/DataContext";
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () => {
  const {
      cart,
      bagItems,
      addToCart,
      removeToCart,
      cartTotalAmount,
      cartTotalMRPAmount,
      cartTotalDiscountAmount
  } = useContext(DataContext);

  return (
    <div className="cart-page">
      <h1>Your Bag Items</h1>
      <div>
        <div className="cart-list">
          <p>ITEM</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        <br />
        <hr />
        {bagItems.map((list, index) => {
          if (cart[list.id] > 0) {
            return (
              <div className="cart-detials" key={index}>
                <div className="img-name">
                  <img src={list.image} alt={list.name} />
                  <p>{list.name}</p>
                </div>
                <p>{list.price}</p>
                <div className="add-plus-btn">
                  <FaPlus
                    className="plus-minus"
                    onClick={() => addToCart(list.id)}
                  />
                  <p>{cart[list.id]}</p>
                  <FaMinus
                    className="plus-minus"
                    onClick={() => removeToCart(list.id)}
                  />
                </div>
                <p>{list.price * cart[list.id]}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-last-container">
        <div className="promo-container">
          <p>If have a promo code, Enter it here</p>
          <div className="promo-input">
            <input type="text" name="promo code" />
            <button className="promo-btn">Apply</button>
          </div>
        </div>
        <div className="total-amount-container">
          <h3>Total Amount</h3>
          <div className="mrp-price">
            <p>MRP</p>
            <p>{cartTotalMRPAmount()}</p>
          </div>
          <div className="discount-price">
            <p>Discount</p>
            <p>{cartTotalDiscountAmount()}</p>
          </div>
          <div className="delivery-fee">
            <p>Delivery</p>
            <p>Free</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>{cartTotalAmount()}</p>
          </div>
          <button className="checkout">PROCEED TO PAY</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
