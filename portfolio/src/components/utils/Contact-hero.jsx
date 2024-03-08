import React from 'react';
import '/src/components/css/contact-hero.css';

const ContactHero = () => {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero-image">
                    <img src="/src/assets/images/IMG_1746.PNG" alt="contact hero image" />
                </div>
                <div className="hero-content">
                    <h1>Get In Touch</h1>
                    <p>Let's talk about your next project</p>
                </div>
            </div>
        </div>
    );
}

export default ContactHero;
