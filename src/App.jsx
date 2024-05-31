import React  from "react";
import Navbar from "./components/Navbar/Navbar";
import ImageSlider from "./components/Image Slider/ImageSlider";
import {imageBanner} from "./assets/assets.js"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"


function App(){

  const images = [imageBanner.imgBanner1, imageBanner.imgBanner2, imageBanner.imgBanner3, imageBanner.imgBanner4, imageBanner.imgBanner5]

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;