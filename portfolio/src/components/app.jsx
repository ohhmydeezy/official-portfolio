import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './utils/Navbar'
import Hero from './utils/hero'
import TextBubble from './utils/text-bubble'
import Footer from './utils/footer'
import ProjectCard from './utils/project-card'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/Home';


function app() {
    return (
        <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="About" element={<About />} />
                        <Route exact path="Contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
        </div>
    );
}

export default app;