import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Newjeans from './components/Newjeans'
import Section4 from './components/Section4'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Section2 />
      <Newjeans />
      <Section3 />
      <Section4 />
      <Footer />
    </>
  )
}

export default App
