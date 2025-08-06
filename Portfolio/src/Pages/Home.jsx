import React from 'react'
import Hero from '../Components/Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Contact/>
    </>
  )
}

export default Home
