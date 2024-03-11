import React, { useEffect } from 'react';
import "/src/components/css/skill-slider.css";

const SkillSlider = () => {
    useEffect(() => {
        const logosSlide = document.querySelector('.logo-slide');
        if (logosSlide) {
            var copy = logosSlide.cloneNode(true);
            document.querySelector('.logos').appendChild(copy);
        } else {
            console.error('Element with class .logos-slide not found');
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div className="logos">
            <div className="logo-slide">
                <img src="./src/assets/images/icons/html5-6646.svg" alt="HTML5" />
                <img src="./src/assets/images/icons/1200px-CSS.3.png" alt="CSS3"  />
                <img src="./src/assets/images/icons/javascript-3.png" alt="JavaScript" />
                <img src="./src/assets/images/icons/React-icon.svg.png" alt="React" />
                <img src="./src/assets/images/icons/Bootstrap_logo.png" alt="Bootstrap" />
                <img src="./src/assets/images/icons/Figma-1-logo.png" alt="figma" />
            </div>
        </div>
    );
}

export default SkillSlider;
