import React, { useEffect, useState } from 'react'
import scienceImg from '../assets/images/science.jpg';
import worldImg from '../assets/images/world.jpg';
import healthImg from '../assets/images/health.jpg';
import techImg from '../assets/images/tech.jpg';
import entertainmentImg from '../assets/images/entertainment.jpg';
import nationImg from '../assets/images/nation.jpg';
import sportsImg from '../assets/images/sports.jpg';
import noImg from '../assets/images/no-img.png';
import './News.css'
import axios from 'axios'

const News = () => {
  const [headline, setHeadline] = useState(null);  
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  
  const categories = [
    'general',
    'world',
    'business',
    'technology',
    'entertainment',
    'sports',
    'science',
    'health',
    'nation',
  ]


  useEffect(()=> {
    const fetchNews = async () => {
      const api_key = import.meta.env.VITE_GNEWS_API_KEY;
      // const url = '';
      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${api_key}`;
      const response = await axios.get(url);
      const fetchedNews = response.data.articles;
      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1,7));
    }
    fetchNews();
  }, [selectedCategory]);
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  }
  return (
    <div className='news-app'>
      <div className="nav-header">
        <h1 className="logo">News App</h1>
      </div>
      <div className="news-content">
        <nav className="navbar">
          <h1 className="nav-heading">Categories</h1>
          <div className="categories">
            {categories.map((category => (
              <a href="#" className='nav-link' key={category} onClick={(e) => handleCategoryClick(e, category)}>{category}</a>  
            )))}  
          </div>
        </nav>
        <div className="news-section">
          {headline && (
          <div className="headline">
            <img src={headline.image || noImg} alt={headline.title} />
            <h2 className="headline-title">
              {headline.title}
            </h2>
          </div>
          ) }
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
              <img src={article.image || noImg} alt={article.title}/>
              <h3> {article.title}</h3>
            </div>
            ))}
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
