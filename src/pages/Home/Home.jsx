import React, { useState } from 'react'
import "./Home.css"
import ImageSlider from "../../components/Image Slider/ImageSlider";
import Categories from '../../components/Categories/Categories';

const Home = ({images}) => {

  const [item, setItem] = useState("All")

  return (
    <div>
      <ImageSlider images={images} />
      <Categories item={item} setItem={setItem} />
    </div>
  )
}

export default Home
