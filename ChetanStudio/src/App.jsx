import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "../src/pages/Home"
import Gallery from "../src/pages/Gallery"
import Stories from "../src/pages/Stories"
import About from "../src/pages/About"
import Contact from "../src/pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
