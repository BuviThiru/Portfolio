import './about.css'
import React, { useState } from 'react'
import Me from '../../assets/aboutImage.jpg'
import {IoMdSchool } from 'react-icons/io'
import {GiSkills } from 'react-icons/gi'
import {AiOutlineCloseCircle } from 'react-icons/ai'
import relevel from '../../assets/Relevel.jpg'
import reactLogo from '../../assets/namastae react.png'
import { motion } from "framer-motion";


const About = () => {
  const [course,setCourse] = useState(false)
  console.log(course)
  return (
    <section id="about"> 
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className= {`${!course?'container about-container':'none'}`} >
      <div className='about-me'>
        <div className='about-me-image'>
          <img src= {Me} alt ="AboutPic"/>
        </div>
        </div>
        <div className='about-content'>
         <div className='about-cards'>
          <article className='about-card' onClick={()=>{setCourse(true)}}>
            <a href='#certi'>
            <IoMdSchool className='about-icon'  />
            <h5>Certifications</h5>
            <small>Click here</small></a>
          </article>
          
          <article className='about-card'>
            <GiSkills className='about-icon' />
            <a href='#skills'>
            <h5>Skills</h5>
            <small>Click here</small></a>
          </article>
         </div>
         
         <p>I have deep desire to use my skills and knowledge to develop functional web applications... </p>
         <p>My curiosity for developing dynamic web pages and applications, always motivates to be a better full stack developer </p> 
         <a href='#contacts' className='btn btn-primary'>Let's Talk</a>        
        </div>
      </div>
      {course && (
          <motion.div
          className='animation'
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 3.85, ease: "easeOut" }}
          >
            
           <div className= "container1 certificate-container">
            <article className='course'>
                <img src={relevel}  alt="RELEVEL" className='img1'/>
                <h3>Fullstack Development Course</h3>
                <small>11 Months</small>
            </article>
            <article className='course'>
            <img src={reactLogo} alt="RELEVEL" className='img2'/>
                <h3>React</h3>
                <small>2 Months</small>
            </article>
            <div className='close' onClick={()=>setCourse(false)}><AiOutlineCloseCircle/></div>
        </div>
          </motion.div>
       )}
      {/* <div className= {`${course?'container1 certificate-container':'none'}`} id="certi">
          <article className='course'>
              <img src={relevel}  alt="RELEVEL" className='img1'/>
               <h3>Fullstack Development Course</h3>
               <small>11 Months</small>
           </article>
           <article className='course'>
           <img src={reactLogo} alt="RELEVEL" className='img2'/>
               <h3>React</h3>
               <small>2 Months</small>
           </article>
          <a href="#about"><div className='close' onClick={()=>setCourse(false)}><AiOutlineCloseCircle/></div></a>
       </div> */}
    </section>
  )
}

export default About






// {course && (
      
//   <motion.div
//     whileInView={{ x: [300, 0] }}
//     transition={{ duration: 0.85, ease: "easeOut" }}
//   >
//    <div className= "container1 certificate-container">
//     <article className='course'>
//         <img src={relevel}  alt="RELEVEL" className='img1'/>
//         <h3>Fullstack Development Course</h3>
//         <small>11 Months</small>
//     </article>
//     <article className='course'>
//     <img src={reactLogo} alt="RELEVEL" className='img2'/>
//         <h3>React</h3>
//         <small>2 Months</small>
//     </article>
//     <div className='close' onClick={()=>setCourse(false)}><AiOutlineClose/></div>
// </div> 
//   </motion.div>
// )}