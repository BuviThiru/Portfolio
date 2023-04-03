import React from "react";
import "./skills.css";
import { BsFillBootstrapFill } from "react-icons/bs";
 import {MdSchema} from 'react-icons/md'
 import {SiSequelize,SiCss3} from 'react-icons/si'
 import {AiFillHtml5} from 'react-icons/ai'
 import {FaNodeJs,FaReact} from 'react-icons/fa'
 import {TbBrandJavascript} from 'react-icons/tb'
 import {GrMysql} from 'react-icons/gr'
 import {SiTailwindcss} from 'react-icons/si'

function Skills() {
  return (
    <section id="skills">
      <h5>What I Learnt?</h5>
      <h2>Skills</h2>
      <div className="container skills-container">
        <div className="skills-frontend">
          <h3>Frontend Development</h3>
          <div className="skills-content">
            <article className="skill-details">
              <AiFillHtml5 className="skill-icons"/>
              <h3>HTML</h3>
            </article>
            <article className="skill-details">
              <SiCss3 className="skill-icons"/>
              <h3>CSS</h3>
            </article>
            <article className="skill-details">
              <TbBrandJavascript className="skill-icons"/>
              <h3>JavaScript</h3>
            </article>
            <article className="skill-details">
              <FaReact className="skill-icons"/>
              <h3>React JS</h3>
            </article>
            <article className="skill-details">
              <BsFillBootstrapFill className="skill-icons"/>
              <h3>Bootstrap</h3>
            </article>
            <article className="skill-details">
              <SiTailwindcss className="skill-icons"/>
              <h3>Tailwind</h3>
            </article>
            
          </div>
        </div>
        
        
        <div className="skills-backend">
        <h3>Backend Development</h3>
        <div className="skills-content">
            <article className="skill-details">
              <FaNodeJs className="skill-icons"/>
              <h3>Node.js</h3>
            </article >
            <article className="skill-details">
              <GrMysql className="skill-icons"/>
              <h3>MySQL</h3>
            </article>
            <article className="skill-details">
              <SiSequelize className="skill-icons" />
              <h3>Sequelize</h3>
            </article>
            <article className="skill-details">
              <MdSchema className="skill-icons"/>
              <h3>Sanity</h3>
            </article>
            {/* <article className="skill-details">
              <BsFillPatchCheckFill />
              <h3>React</h3>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
