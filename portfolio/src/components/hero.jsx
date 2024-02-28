import React from 'react';
import '/src/components/css/style.css';

const name = "Dylan Gunda";

const Hero = () => {
    return (
        <div class="container">
            <div class="hero">
                <div class="hero-image">
                    <img src="/src/assets/images/IMG_1717.PNG" alt="waving hero image" />
                </div>
                <div class="hero-content">
                    <h1>Hi, I'm <span class="text-primary">{name}</span></h1>
                    <p>Front-End Web Developer</p>
                </div>
            </div>
            <div class="col-lg-6">

            </div>
        </div>
    );
}

export default Hero;