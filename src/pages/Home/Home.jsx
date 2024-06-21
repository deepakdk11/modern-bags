import React, { useState } from 'react'
import "./Home.css"
import ImageSlider from "../../components/Image Slider/ImageSlider";
import Categories from '../../components/Categories/Categories';
import BagData from '../../components/BagData/BagData';
import BrandValue from '../../components/BrandValue/BrandValue';


const Home = ({images}) => {

  const [item, setItem] = useState("All")

  return (
    <div>
      <ImageSlider images={images} />
      <Categories item={item} setItem={setItem} />
      <BagData item={item} />
      <BrandValue />
    </div>
  )
}

export default Home
