import React from 'react';
import '/src/components/css/hero.css';

const name = "Dylan Gunda";

const Hero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-image">
                    <img src="/src/assets/images/IMG_1717.PNG" alt="waving hero image" />
                </div>
                <div className="hero-content">
                    <h1>Hi, I'm <span className="text-primary">{name}</span></h1>
                    <p>Front-End Web Developer</p>
                </div>
            </div>
            <div className="col-lg-6">

            </div>
        </div>
    );
}

export default Hero;