import React from "react";
import Header from "./Header";
import "./Header.css"
import "./ImageSlider.css"
import ImageSlider from "./ImageSlider";
import imgBanner1 from "./assets/banner/imgbanner1.jpg"
import imgBanner2 from "./assets/banner/imgbanner2.jpg"
import imgBanner3 from "./assets/banner/imgbanner3.jpg"
import imgBanner4 from "./assets/banner/imgbanner4.jpg"
import imgBanner5 from "./assets/banner/imgbanner5.jpg"


function App(){

  const images = [imgBanner1, imgBanner2, imgBanner3, imgBanner4, imgBanner5]

  return(
    <div>
      <Header />
      <ImageSlider images={images} />
    </div>
  );
};

export default App;