import React from 'react'
import './portfolio.css'
import {data} from '../../assets/data.js'

function Portfolio() {

  return (

    <section id='portfolio'>
      <h5>My Sample Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
      {data.map(({id,image,title,desc,github,demo})=>{return(
        <article key={id} className='portfolio-item'>
        <div className='portfolio-item-image'>
          
          <img src ={image} alt="Ecom"/>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className='portfolio-item-cta'>
        <a href={github} className='btn'rel='noreferrer' target="_blank">Github</a>
        <a href={demo} className='btn btn-primary' rel='noreferrer' target="_blank">Live Demo</a>
        </div>
      </article>
      )})}
        
      </div>
    </section>
  )
}

export default Portfolio