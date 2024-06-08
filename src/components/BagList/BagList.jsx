import React, { useContext } from 'react'
import "./BagList.css"
import { DataContext } from '../../Context/DataContext'

const BagList = ({id, name, discount, star, rating, price, MRP, image}) => {

  const {addCart, addToCart} = useContext(DataContext)

  return (
    <div className='mainContainer'>
        <div className="imgContainer">
            <img src={image} alt={name} />
        </div>
        <div className="bagInfo">
            <p className='bagName'>{name}</p>
            <div className="rating">
                <p className='star'>{star}</p>
                <p className='personRating'>({rating})</p>
            </div>
            <div className="priceContainer">
                <p className='offerPrice'>{price}</p>
                <p className='MRP'>{MRP}</p>
            </div>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
      <p className='discount'>Sale | {discount}</p>
    </div>
  )
}

export default BagList
