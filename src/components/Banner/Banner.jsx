import React, { useContext } from 'react'
import BagDetails from "../../pages/BagDetails/BagDetails"
import { DataContext } from '../../Context/DataContext'
import { useParams } from 'react-router-dom'
import "./Banner.css"

const Banner = () => {
  const { bagItems } = useContext(DataContext)
  const {id} = useParams()
  const product = bagItems.find((product) => product.id === Number(id))
  return (
    <div className='banner'>
      <p>{`Home>Shop>${product.name}`}</p>
      <BagDetails product = {product} />
    </div>
  )
}

export default Banner
