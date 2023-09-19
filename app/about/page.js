import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sectionabt from '../../components/Sectionabt';
import React from 'react'

export const metadata = {
  title: 'About Us'
}

const About = () => {
  const sectionOffsets = [0, 640]
  return (
    <>
      <Navbar sectionOffsets={sectionOffsets}/>
      <Sectionabt />
      <Footer />
    </>
  )
}

export default About