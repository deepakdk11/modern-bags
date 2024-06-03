import React, { useContext } from 'react'
import "./BagData.css"
import { DataContext } from '../../Context/DataContext'
import BagList from '../BagList/BagList'

const BagData = ({item}) => {
    const { bagItems } = useContext(DataContext)
  return (
    <div className='bagsData'>
      <h2>All Categories Bags</h2>
      <div>
        {bagItems.map((list, index) => {
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
        })}
      </div>
    </div>
  )
}

export default BagData
