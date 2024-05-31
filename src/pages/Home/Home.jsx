import React from 'react'
import "./Home.css"
import ImageSlider from "../../components/Image Slider/ImageSlider";

const Home = ({images}) => {
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  )
}

export default Home
