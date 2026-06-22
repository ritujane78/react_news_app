import React from 'react'
import scienceImg from '../assets/images/science.jpg';
import worldImg from '../assets/images/world.jpg';
import healthImg from '../assets/images/health.jpg';
import techImg from '../assets/images/tech.jpg';
import entertainmentImg from '../assets/images/entertainment.jpg';
import nationImg from '../assets/images/nation.jpg';
import sportsImg from '../assets/images/sports.jpg';
import './News.css'

const News = () => {
  return (
    <div className='news-app'>
      <div className="nav-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">  
            <a href="#" className='nav-link'>general</a>
            <a href="#" className='nav-link'>world</a>
            <a href="#" className='nav-link'>business</a>
            <a href="#" className='nav-link'>technology</a>
            <a href="#" className='nav-link'>entertainment</a>
            <a href="#" className='nav-link'>science</a>
            <a href="#" className='nav-link'>sports</a>
            <a href="#" className='nav-link'>health</a>
            <a href="#" className='nav-link'>nation</a>
          </div>
        </nav>
        <div className="news-section">
          <div className="headline">
            <img src={techImg} alt="Headline Image" />
            <h2 className="headline-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={worldImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div className="news-grid-item">
              <img src={sportsImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>  
            <div className="news-grid-item">
              <img src={scienceImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>  
            <div className="news-grid-item">
              <img src={healthImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>  
            <div className="news-grid-item">
              <img src={entertainmentImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>  
            <div className="news-grid-item">
              <img src={nationImg} alt="News Image" />
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="copyright">
          <span>News App</span>
        </p>
        <p>&copy; All Rights Reserved.
          By Ritu Bafna
        </p>
      </footer>
    </div>
  )
}

export default News
