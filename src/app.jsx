import React, { useEffect, useState } from 'react'
import './app.css'
import Header from './include/header.jsx'

import { Link } from 'react-router-dom'
import Footer from './include/footer.jsx'
const App = () => {
const [trending,setTrending]=useState([])
const [upcoming,setUpcoming]=useState([])
const [airing,setAiring]=useState([])
const [topViewed, setTopViewed] = useState([]);


const fetchWithRetry = (url, retries = 3, delay = 1000) =>
  fetch(url).then(res => {
    if (res.status === 429 && retries > 0) {
      return new Promise(resolve =>
        setTimeout(() => resolve(fetchWithRetry(url, retries - 1, delay * 2)), delay)
      );
    }
    return res.json();
  });

useEffect(() => {
  fetchWithRetry('https://api.jikan.moe/v4/top/anime')
    .then(data => setTrending(data.data))
    .catch(err => console.error(err));

  fetchWithRetry('https://api.jikan.moe/v4/seasons/upcoming')
    .then(data => setUpcoming(data.data))
    .catch(err => console.error(err));

  fetchWithRetry('https://api.jikan.moe/v4/seasons/now')
    .then(data => setAiring(data.data))
    .catch(err => console.error(err));
    fetchWithRetry('https://api.jikan.moe/v4/top/anime?filter=bypopularity')
  .then(data => setTopViewed(data.data))
  .catch(err => console.error( err));

}, []);

const renderAnimeSection = (title, list) => (
  
    <div className="top_cont">
      
      <div className="contai">
        <div className="head">
          <div></div>
          <h1>{title}</h1>
        </div>
        <div className="box">
           {list.slice(0, 8).map((anime, index) => {
          const shortTitle = anime.title.split(' ').slice(0, 2).join(' ');
          return (
            <Link to={`/page/${anime.mal_id}`}>
            <div className="sm" key={index}>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <div className="bt">
                <span>{anime.score ? `Score: ${anime.score}` : 'No score'}</span>
                <span>{anime.type}</span>
              </div>
              <p>Kami anime:- {shortTitle}</p>
            </div>
            </Link>
          );
        })}
        </div>
      </div>
      
    </div>
  );

  
  return (
    <>
      <Header />
      <div className="cont">
        <div className="container">
          <div className="cont_img">
            <div className="text">
              <h1>Fate / Stay Night: Unlimited Blade Works</h1>
              <p>After 30 days of travel across the world...</p>
              <button>Watch Now</button>
            </div>
          </div>
        </div>
        
      </div>
      
        {renderAnimeSection('Trending Now', trending)}
      {renderAnimeSection('Upcoming Anime', upcoming)}
      {renderAnimeSection('Currently Airing', airing)}
      {renderAnimeSection('Top Viewed', topViewed)}


<Footer/>
    </>
  )
}

export default App