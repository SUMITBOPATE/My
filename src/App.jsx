import React from 'react'
import Navbar from "./Components/Navbar"
import Content  from "./Components/Content"
import About  from './Components/About'

import Projects from './Components/Projects'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
 
    
    <Navbar/>
 
<Content/>
<About/>
   
<Projects/>


   
   
    <Footer/>
   
    </>
  )
}

export default App
