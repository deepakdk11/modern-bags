import React from 'react'
import "./Home.css"
import ImageSlider from "../../components/Image Slider/ImageSlider";
import Categories from '../../components/Categories/Categories';

const Home = ({images}) => {
  return (
    <div>
      <ImageSlider images={images} />
      <Categories />
    </div>
  )
}

export default Home
