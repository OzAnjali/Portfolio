import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import {Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
<Toaster/>
      <Navbar/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
