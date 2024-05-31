import React  from "react";
import Navbar from "./components/Navbar/Navbar";
import {imageBanner} from "./assets/assets.js"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx";


function App(){

  const images = [
    imageBanner.imgBanner1,
    imageBanner.imgBanner2,
    imageBanner.imgBanner3,
    imageBanner.imgBanner4,
    imageBanner.imgBanner5,
    imageBanner.imgBanner6,
    imageBanner.imgBanner7
  ]

  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/cart" element={ <Cart /> }/>
      </Routes>
    </div>
  );
};

export default App;