import React from 'react'
import Navbar from './utils/Navbar'
import Hero from './utils/hero'
import TextBubble from './utils/text-bubble'
import Footer from './utils/footer'
import PortfolioContainer from './Portfolio-container'

function app() {
    return (
        <div>
            <PortfolioContainer />
            <Navbar />
            <Hero />
            <TextBubble />
            <Footer />
        </div>
    );
}

export default app;