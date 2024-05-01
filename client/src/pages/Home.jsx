import Aboutmentor from '@/components/Aboutmentor'
import FeatureSection from '@/components/FeatureSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Aboutmentor />
        <Testimonials />
        <Footer />
      </div>
    </div>

  )
}

export default Home