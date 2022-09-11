import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Developement</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Frontend - HTML , CSS , JAVASCRIPT</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Backend - Nodejs , MongoDb </p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Reactjs , Figma ,Bootstrap</p>
              </li>
            
            </ul>
        </article>



        {/* <article className="service">
          <div className="service__head">
            <h3>Android Developement</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet c Officia, tenetu</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet c Officia, tenetu</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet c Officia, tenetu</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet c Officia, tenetu</p>
              </li>
            </ul>
        </article> */}

      </div>
    </section>
  )
}

export default Services
