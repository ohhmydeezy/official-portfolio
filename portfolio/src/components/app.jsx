import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './utils/scrollUp';
import Navbar from './utils/Navbar';
import Footer from './utils/Footer';
import Projects from './Pages/Projects';
import About from './pages/About'; // Correct casing for 'About' page
import Contact from './pages/Contact'; // Correct casing for 'Contact' page
import Home from './pages/Home'; // Correct casing for 'Home' page

function App() {
    return (
        <div>
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
