import React, { useContext } from 'react'
import "./BagDetails.css"
import { DataContext } from '../../Context/DataContext'
import { useParams } from 'react-router-dom'


const BagDetails = () => {
  const { bagItems , cart, addToCart, removeToCart,} = useContext(DataContext)
  const {id} = useParams()
  const product = bagItems.find((product) => product.id === Number(id))
  if (!product) {
    return <h2>Page not found</h2>
  }


  return (
    <div className='fullView'>
      <div className='fullView-img'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='lastView'>
        <h1>{product.name}</h1>
        <div className="mrp-discount">
          <p style={{textDecoration: "line-through"}}>MRP: ₹{product.MRP}</p>
          <p style={{color:"green"}}>{product.discount}off</p>
        </div>
        <p className='lastView-price'>₹{product.price}  <span>inclusive of all taxes</span></p>
        <div className="lastView-rating">
          <p className='lastView-star'>{product.star}</p>
          <p className='review'>{product.rating}  reviews</p>
        </div>
        <hr />
        <div className="color">
          <p>COLOR - {product.color}</p>
          <img src={product.image} alt={product.name} />
          <div className="hex" ><div className='hexColor'style={{background:`${product.Hex}`}}></div></div>
        </div>
        <div className="lastView-btns">
          <button onClick={() => addToCart(product.id)}>+</button>
          <p>0{cart[product.id]}</p>
          <button onClick={() => removeToCart(product.id)}>-</button>
        </div>
        <div className="add-buy">
          <button>Add To Cart</button>
          <button className='buy-btn'>Buy Now</button>
        </div> 
      </div>
    </div>
  )
}

export default BagDetails
