import React from 'react'
import './about.css'
import ME from '../../assets/me.png.PNG'
import  {BsAward} from 'react-icons/bs'
// import {AiOutlineUser} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>12+ months experience</small>
            </article>

            {/* <article className='about__card'>
              <AiOutlineUser className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ clients</small>
            </article> */}

            <article className='about__card'>
              <GrProjects className='about__icon'/>
              <h5>Projects</h5>
              <small> 5 projects</small>
            </article>

          </div>
          <p>High level experience in web design and development knowledge, producing quality work.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    
    </section>
  )
}

export default About
