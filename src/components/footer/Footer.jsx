import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import React from 'react'

function Footer() {
  return (
   <footer>
    <a href="#header" className='footer-logo'>Buvaneshwari</a>

    <ul className='footer-links'>
    <li><a href="#header">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contacts">Contact</a></li>
    </ul>

    <div className='footer-socials'>
    <a href='https://www.linkedin.com/in/buvaneshwari-thirumalaisamy-202692239/' rel="noreferrer" target= '_blank'><BsLinkedin /></a>
    <a href= 'https://github.com/BuviThiru' rel="noreferrer" target= '_blank'><FaGithub /></a>
    </div>
  
   </footer>
  )
}

export default Footer
