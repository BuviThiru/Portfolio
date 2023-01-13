import './navbar.css'

import React, {  useState } from 'react'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiMessageAltDetail } from 'react-icons/bi'
 
import {GiSkills} from 'react-icons/gi'
import {FaProjectDiagram} from 'react-icons/fa'

function Navbar() {
  const [active,setActive] = useState("#header")
  return (
   <nav>
    <a href= "#header"  onClick = {()=>setActive("#header")} className= {active === "#header"?"active":""} title='Home'><AiOutlineHome /> </a>
    <a href= "#about" onClick = {()=>setActive("#about")} className={active === "#about"?"active":""} title='About'><AiOutlineUser /> </a>
    <a href= "#skills" onClick = {()=>setActive("#skills")} className={active === "#skills"?"active":""} title ='Skills'><GiSkills /> </a>
    {/* <a href= "#experience"><BiBook /> </a> */}
    <a href= "#portfolio" onClick = {()=>setActive("#services")} className={active === "#portfolio"?"active":""} title='Projects'><FaProjectDiagram /> </a>
    <a href= "#contacts" onClick = {()=>setActive("#contacts")} className={active === "#contacts"?"active":""} title='Contact'><BiMessageAltDetail /> </a>
  
   </nav>
  ) 
}

export default Navbar