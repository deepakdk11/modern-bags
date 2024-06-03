import React from 'react'
import "./BagList.css"

const BagList = ({id, name, discount, star, rating, price, MRP, image}) => {
  return (
    <div className='mainContainer'>
        <div className="imgContainer">
            <img src={image} alt={name} />
        </div>
        <div className="bagInfo">
            <p>{name}</p>
            <div className="rating">
                <p>{star}</p>
                <p>{rating}</p>
            </div>
            <div className="priceContainer">
                <p>{price}</p>
                <p>{MRP}</p>
            </div>
            <button>Add To Cart</button>
        </div>
      <p>{discount}</p>
    </div>
  )
}

export default BagList
