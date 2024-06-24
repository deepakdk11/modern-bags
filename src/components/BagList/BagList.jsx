import React, { useContext } from 'react'
import "./BagList.css"
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { DataContext } from '../../Context/DataContext';
import { Link } from "react-router-dom";

const BagList = ({id, name, discount, star, rating, price, MRP, image}) => {

  const {cart,addToCart,removeToCart } = useContext(DataContext)


  return (
    <div className='mainContainer'>
        <div className="imgContainer">
           <Link to={`./details/${id}`}><img src={image} alt={name} /></Link> 
        </div>
        <div className="bagInfo">
            <p className='bagName'>{name}</p>
            <div className="rating">
                <p className='star'>{star}</p>
                <p className='personRating'>({rating})</p>
            </div>
            <div className="priceContainer">
                <p className='offerPrice'>₹{price}</p>
                <p className='MRP'>MRP:₹{MRP}</p>
            </div>
            <div className='cartBtn'>
              {
                !cart[id]
                ?<button className='add' onClick={() => addToCart(id)}>Add to cart</button>
                : <div className='add-remove'>
                    <IoBagAdd className='addBtn' onClick={() => addToCart(id)}/>
                    <p>{cart[id]}</p>
                    <FaTrashCanArrowUp className='remove' onClick={() => removeToCart(id)} />
                  </div>
              }
            </div>
        </div>
      <p className='discount'>Sale | {discount}</p>
    </div>
  )
}

export default BagList
