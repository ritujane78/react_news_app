import React, { useEffect, useState } from 'react'
import noImg from '../assets/images/no-img.png';
import './News.css'
import axios from 'axios'
import NewsModal from './NewsModal';

const News = () => {
  const [headline, setHeadline] = useState(null);  
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  
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


useEffect(() => {
  const fetchNews = async () => {
    try {
      setLoading(true);

      const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
      // const url = '';

      const url = `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${apiKey}`;

      const response = await axios.get(url);

      const fetchedNews = response.data.articles;

      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  fetchNews();
}, [selectedCategory]);
  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  }
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
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
              <a href="#" 
              className={`nav-link ${
                selectedCategory === category ? 'active' : ''
                }`}
                key={category} 
                onClick={(e) => handleCategoryClick(e, category)}>
                {category}
              </a>  
              )))}  
          </div>
        </nav>
        <div className="news-section">
        {loading ? (
          <div className="loading">
            Loading news...
          </div>
        ) : (
          <>
            {headline && (
              <div
                className="headline"
                onClick={() => handleArticleClick(headline)}
              >
                <img src={headline.image || noImg} alt={headline.title} />
                <h2 className="headline-title">{headline.title}</h2>
              </div>
            )}

            <div className="news-grid">
              {news.map((article, index) => (
                <div
                  className="news-grid-item"
                  key={index}
                  onClick={() => handleArticleClick(article)}
                >
                  <img src={article.image || noImg} alt={article.title} />
                  <h3>{article.title}</h3>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
        <NewsModal show = {showModal} article = {selectedArticle} onClose = {() => setShowModal(false)} />
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
