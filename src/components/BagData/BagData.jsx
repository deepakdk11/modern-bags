import React, { useContext, useEffect, useState } from 'react'
import "./BagData.css"
import { DataContext } from '../../Context/DataContext'
import BagList from '../BagList/BagList'

const BagData = ({item}) => {

  const { bagItems } = useContext(DataContext)

  const [load, setload] = useState(bagItems)

    
  const shuffledProducts = [...bagItems].sort(() => Math.random() - 0.5)
  
  useEffect(() => {
    setload(shuffledProducts)
  },[])

  const [visibleProducts, setVisibleProducts] = useState(20)

  const loadMore = () => {
    setVisibleProducts(prevVisible => prevVisible + 20);
  };

  return (
    <div className='bagDataContainer'>
      <h2>All Categories Bags</h2>
      <div className='bagData'>
        {load.slice(0, visibleProducts).map((list, index) => {
          if (item==="All" || item==list.item) {
            return (
              <BagList
                key={index}
                name={list.name}
                id={list.id}
                image={list.image}
                price={list.price}
                discount={list.discount}
                MRP={list.MRP}
                star={list.star}
                rating={list.rating} 
              />
            )
          }
            
        })}
      </div>
      <div className="view-more">
      {visibleProducts < shuffledProducts.length && (
        <button className='more'onClick={loadMore}>Load More</button>
      )}
      </div>
      
    </div>
  )
}

export default BagData
