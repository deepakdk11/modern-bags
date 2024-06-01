import React, {useState, useEffect} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageSlider.css"

const ImageSlider = ({images}) => {

    const [number, setNumber] = useState(0);
    
    useEffect(()=>{

        const autoSlide = setInterval(() => {
            setNumber((prevImg) => (prevImg + 1) % images.length)
        }, 3000)

        return () => clearInterval(autoSlide);
    }, [images.length, 3000]);

    const increase = () => {
        const result = (number + 1) % images.length;
        setNumber(result)
    }
    
    const decrease = () => {
        const result = (number - 1 + images.length) % images.length;
        setNumber(result)
    }    

    return(
        <div className="image-slider">
            <FaChevronLeft size={30} onClick={decrease} style={{cursor: "pointer"}} />
            <img src={images[number]} alt="image" />
            <FaChevronRight size={30} onClick={increase} style={{cursor: "pointer"}} />
        </div>
        
    );

};

export default ImageSlider;