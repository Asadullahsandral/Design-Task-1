import { useState } from 'react'
import Navbar from './components/Navbar'
import Slider from './components/slider'
import Section from './components/Section'
import Banner from './components/isobanner.jpg'
import './App.css'
import Content from './components/Content'
import Working from './components/working'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Section />
      <img src={Banner} className='img' alt="" />
      <Content />
      <Working />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
