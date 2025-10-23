import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import MenuGrid from '../components/MenuGrid'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-light font-lato'>
      <Navbar/>
      <Hero/>
      <AboutSection/>
      <MenuGrid/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home
