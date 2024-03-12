import React, { useState } from "react";
import { motion } from "framer-motion";
import '/src/components/css/image-slider.css'

import comingSoon1 from "../../assets/images/coming soon .webp";
import comingSoon2 from "../../assets/images/AI coming soon.png";
import comingSoon3 from "../../assets/images/caution coming soon.png";

const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((prevIndex) => (prevIndex + 1) % 3)
        );
    };

    const images = [comingSoon1, comingSoon2, comingSoon3];

    const positions = ["left", "center", "right"];

    const imageVariants = {
        center: { x: '0%', scale: 1, zIndex: 3 }, // Highest zIndex for the center image
        left: { x: '-50%', scale: 0.7, zIndex: 2 },
        right: { x: '50%', scale: 0.7, zIndex: 2 },
    };

    return (
        <div>
            <div className="header">
                <h1>My Projects</h1>
            </div>
            <div className="slider-container">
                <div className="slider">
                    {images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="slider-image rounded-[12px]"
                            initial="center"
                            animate={positions[positionIndexes[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.5 }}
                            style={{width: '90%', position: 'absolute', borderRadius: '20px'}}
                        />
                    ))}
                </div>
                <button className="slider-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}
export default ImageSlider;
