import './contacts.css'
import React,{useRef} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp,BsTelephoneFill} from 'react-icons/bs'
import emailjs from 'emailjs-com'

function Contacts() {
  const form = useRef();
  const sendEmail =(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_1sfivlv','template_tsjg49h',form.current,'ZEAxYiw_dfrhqw321')
    e.target.reset()
    alert("Message sent Sucessfully!! Thank you ")
  }
  const handleClick = () => {
    window.open("https://wa.me/919524775556?text=Hello%2C%20I%20am%20interested%20in%20your%20product.");
  }


  return (
 

    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
     
      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>thirubuvana@gmail.com</h5>
            <a href="mailto:thirubuvana@gmail.com" rel="noreferrer" target="_blank">Send a mail</a>
          </article>
          <article className='contact-option'>
            <RiMessengerLine className='contact-icon'/>
            <h4>Messenger</h4>           
            <a href="http://m.me/buvaneshwari.thirumalaisamy" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className='contact-option' onClick={handleClick}>
            <BsWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <div>Drop a message</div>
          </article>
          <article className='contact-option'>
            <BsTelephoneFill className='contact-icon'/>
            <h4>Call</h4>
            <div>9524775556</div>
          </article>
        </div>

        <form ref={form} onSubmit ={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type= 'email' name='email' placeholder='Your email-Id' required/>
          <textarea type='message' name='message' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contacts