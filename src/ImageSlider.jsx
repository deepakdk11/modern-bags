import React, {useState, useEffect} from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
            <FaChevronLeft size={30} onClick={decrease} />
            <img src={images[number]} alt="image" />
            <FaChevronRight size={30} onClick={increase} />
        </div>
        
    );

};

export default ImageSlider;