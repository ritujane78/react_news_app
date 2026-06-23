# React News App

A modern News Application built with React and Vite that delivers the latest headlines from around the world. Users can browse news by category, view featured headlines, and read detailed article information through an interactive modal interface.

##  Features

*  Latest news headlines powered by GNews API
*  Category-based news filtering
*  Multiple news categories including:

  * General
  * World
  * Nation
  * Business
  * Technology
  * Entertainment
  * Sports
  * Science
  * Health
*  Featured headline section
*  News article images with fallback placeholders
*  Article detail modal
*  Loading states for improved user experience
*  Fast performance with Vite

---

## Technologies Used

* React
* Vite
* Axios
* CSS3
* GNews API

---

##  API Integration

The application fetches news articles using the GNews API.

```javascript
https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=en&apikey=${apiKey}
```

### Environment Variable

Create a `.env` file in the project root:

```env
VITE_GNEWS_API_KEY=your_api_key_here
```

Access it in React using:

```javascript
const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
```

Get your API key from:

https://gnews.io/

---

##  Installation

### Clone the repository

```bash
git clone https://github.com/ritujane78/react_news_app.git
```

### Navigate to the project directory

```bash
cd react_news_app
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file and add:

```env
VITE_GNEWS_API_KEY=your_api_key_here
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 📸 Application Highlights

* Dynamic news fetching
* Category navigation
* Featured headline display
* News detail modal popup
* Responsive UI for desktop, tablet, and mobile devices
* Error handling and loading indicators
