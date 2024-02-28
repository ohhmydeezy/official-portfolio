import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import TextBubble from './components/text-bubble'
import Footer from './components/footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <TextBubble />
    <Footer />
  </React.StrictMode>,
)
