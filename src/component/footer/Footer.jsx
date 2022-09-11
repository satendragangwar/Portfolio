import React from 'react'
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#about" className='footer__logo'>SATENDRA</a>
      <ul>
        <li> <a href="/">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#experience">Experience</a> </li>
        <li> <a href="#services">Services</a> </li>
        <li> <a href="#portfolio">Portfolio</a> </li>
        <li> <a href="#contact">Contact</a> </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/satendragangwar4573/" target='blank'><AiOutlineInstagram/></a>
       <a href="https://www.linkedin.com/feed/" target='blank'><BsLinkedin/></a>
        <a href="https://twitter.com/home" target='blank'><AiFillTwitterSquare/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy;SATENDRA portfolio All rights reserved.
        </small>
      </div>





    </footer>
  )
}

export default Footer
