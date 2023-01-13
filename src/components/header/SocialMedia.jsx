import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/buvaneshwari-thirumalaisamy-202692239/' rel="noreferrer" target= '_blank'><BsLinkedin /></a>
        <a href= 'https://github.com/BuviThiru' rel="noreferrer" target= '_blank'><FaGithub /></a>
        
    </div>
  )
}

export default SocialMedia