import React, { useState } from 'react'
import "./Home.css"
import ImageSlider from "../../components/Image Slider/ImageSlider";
import Categories from '../../components/Categories/Categories';
import Feeds from '../../components/Feeds/Feeds';

const Home = ({images}) => {

  const [item, setItem] = useState("All")

  return (
    <div>
      <ImageSlider images={images} />
      <Categories item={item} setItem={setItem} />
      <Feeds />
    </div>
  )
}

export default Home
