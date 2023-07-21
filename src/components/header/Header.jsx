import './header.css'

import React from 'react'
import cv from '../../assets/Buvaneshwari.pdf'
import image from '../../assets/me1.png'
import SocialMedia from './SocialMedia'

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <h5> Hello! I'm</h5>
        <h1>Buvaneshwari T</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <div className='cta'>
          <a href={cv} download className='btn'>Download Resume</a>
          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
        <SocialMedia />
        <div className="image">
          <img src = {image} alt = "me"/>
        </div>
        <a href ='#contacts' className='scroll__down'>Scroll Down</a>
        
      
      </div>

    </header>
  )
}

export default Header