import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import{ useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5c16yz6', 'template_hcl14cc', form.current, 'bCFwEbM39o4pbesVK')
     e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Conatct Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>gsatendra488@gmail.com</h5>
            <a href="mailto:gsatendra488@gmail.com" target='blank'>Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whats App</h4>
            <h5>8006245734</h5>
            <a href="https://api.whatsapp.com/send?phone=8006245734" target='blank'>Send a message</a>
          </article>

        </div>
        {/* end of contact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name=""  rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact
