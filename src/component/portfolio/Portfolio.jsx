import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
// import IMG4 from '../../assets/portfolio4.jpg'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="img" />
          </div>
          <h3>Tour booking website</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/satendragangwar" className='btn' target='blank'>Github</a>
          <a href="https://tour-management-app.vercel.app/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
         
          </article>
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Text changer app Reactjs</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/satendragangwar" className='btn' target='blank'>Github</a>
          <a href="https://app-textchanger.herokuapp.com/" className='btn btn-primary' target='blank'>Live Demo</a>
          </div>
          
          </article>
          <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Blog-app</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/satendragangwar/react-news-app" className='btn' target='blank'>Github</a>
          {/* <a href="https://blog-app-alpha-drab.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
         
          </article>
         
      </div>
    </section>
  )
}

export default Portfolio
