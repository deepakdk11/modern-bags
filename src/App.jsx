import React, { useState }  from "react";
import Navbar from "./components/Navbar/Navbar";
import {imageBanner} from "./assets/assets.js"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx";
import LoginPopupPage from "./components/loginPopupPage/LoginPopupPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import BagDetails from "./pages/BagDetails/BagDetails.jsx";


function App(){


  const [popup, setPopup] = useState(false)

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
    <> 
    <div>
    {popup?<LoginPopupPage setPopup={setPopup} /> : <></>}
    </div>
      <div>
        <Navbar setPopup={setPopup} />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="/order" element={ <PlaceOrder /> }/>
          <Route path="/details/:id" element={ <BagDetails /> }/>
        </Routes>
      </div>  
      <Footer />  
    </>

  );
};

export default App;