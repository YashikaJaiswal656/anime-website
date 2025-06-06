import React, { useEffect, useState } from 'react'
import Header from './include/header.jsx'
import './detail.css'
import { Link, useParams } from 'react-router-dom'
import Footer from './include/footer.jsx'


const details = () => {
    
    const [airing,setAiring]=useState([])
    const [topViewed, setTopViewed] = useState([]);
    const {id}=useParams();
    const[anime,setAnime]=useState(null)
    
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
    
      fetchWithRetry('https://api.jikan.moe/v4/seasons/now')
        .then(data => setAiring(data.data))
        .catch(err => console.error(err));
        fetchWithRetry('https://api.jikan.moe/v4/top/anime?filter=bypopularity')
      .then(data => setTopViewed(data.data))
      .catch(err => console.error( err));
    
    }, []);
    useEffect(()=>{
        const fetchanime=async()=>{
            try{
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
const data= await res.json()
setAnime(data.data)
            }
            catch{
console.log("err")
            }
        }
        fetchanime();
    },[id])
    
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
                
                <div className="sm" key={index}>
                    <Link to={`/page/${anime.mal_id}`}>
                  <img src={anime.images.jpg.image_url} alt={anime.title} />
                  <div className="bt">
                    <span>{anime.score ? `Score: ${anime.score}` : 'No score'}</span>
                    <span>{anime.type}</span>
                  </div>
                  <p>Kami anime:- {shortTitle}</p>
                  </Link>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      );
       if (!anime) return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;
    
  return (
    <>
    <Header/>
    
    <div className="ani_cont">
<div className="containe">
    <div className="img">
        <img src={anime.images.jpg.large_image_url} alt="" />
    </div>
    <div className="img_text">
        <h1>{anime.title}</h1>
        <span>{anime.title_japanese}</span>
        
        <p>{anime.synopsis}</p>
        <div className="list">
            <ul>
                <li>Type: <span>{anime.type}</span></li>
                <li>Studios: <span>{anime.studios.map(s => s.name).join(', ')}</span></li>
                <li>Date aired: <span>{anime.aired.string}</span></li>
                <li>Status: <span>{anime.status}</span></li>
                <li>Genre: <span>{anime.genres.map(g => g.name).join(', ')}</span></li>
            </ul>
            <ul>
                
                 <li>Episodes: <span>{anime.episodes}</span></li>
                <li>Score: <span>{anime.score}</span></li>
                <li>Rating: <span>{anime.rating}</span></li>
                <li>Duration: <span>{anime.duration}</span></li>
                <li>Quality: <span>HD</span></li>
            </ul>
        </div>
        <Link to={`/detail/${anime.mal_id}`}><button>Watch Now</button> </Link>
        
    </div>
</div>
    </div>

      {renderAnimeSection('Currently Airing', airing)}
      {renderAnimeSection('Top Viewed', topViewed)}
<Footer/>
    </>
  )
}

export default details