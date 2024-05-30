import React from "react";
import Header from "./Header";
import "./Header.css"
import "./ImageSlider.css"
import ImageSlider from "./ImageSlider";
import img1 from "./assets/img1.png"
import img2 from "./assets/img2.png"
import img3 from "./assets/img3.png"

function App(){

  const images = [img1, img2, img3]

  return(
    <div>
      <Header />
      <ImageSlider images={images} />
    </div>
  );
};

export default App;