import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'

import Portfolio from './components/portfolio/Portfolio'
import About from './components/about/About'
import Skills from './components/skills/Skills'

function App() {
  return (
    <div>
        <Header />
        <Navbar />
        <About />
        <Skills />
        
         <Portfolio />
        <Contacts />
        <Footer />
    </div>
  )
}

export default App