import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './include/header';
import Footer from './include/footer';
import './watch.css';

const Watching = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await res.json();
        setAnime(data.data);
      } catch {
        console.log("Failed to load anime data");
      }
    };
    fetchAnime();
  }, [id]);

  if (!anime) return <p style={{ color: "white", textAlign: "center" }}>Loading...</p>;

  return (
    <>
      <Header />
      <div className="cont">
        <div className="container">
          <h1>{anime.title}:-</h1>

          {/* Trailer Video */}
          <div className="video-wrapper">
            <iframe
              src={anime.trailer?.embed_url || "https://www.youtube.com/embed/KSxwx4EOZzk"}
              title={anime.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p >{anime.synopsis}</p>

          
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Watching;
