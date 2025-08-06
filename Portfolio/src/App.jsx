import React from 'react'
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Education from './Pages/Education';
import Footer from './Components/Footer';
const App = () => {
  return(
   <>
   <Navbar/>
   {/* <Hero/> */}
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/experience' element={<Experience/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/education' element={<Education/>}></Route>
   </Routes>
   <Footer/>
   </>
  )
}
export default App;