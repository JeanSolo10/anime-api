import React, { useState, useEffect } from "react";
import '../App.css';
import AllAnimes from './AllAnimes';
import SingleAnime from "./SingleAnime";
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  const [currentView, setCurrentView] = useState("AllAnime");
  const [animes, setAnimes] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState("");

  useEffect(() => {
    fetchAnimeData();
  }, []);

  const fetchAnimeData = async () => {
    const animeData = await axios.get('/api/v1/anime/')
        .then((response) => response.data.result)
        .then((data) => data);
    const animeImage = animeData.map(async (anime) => {
      const { name } = anime;
      const animeID = await axios.get(`https://api.jikan.moe/v4/anime?letter=${name}`)
        .then((response) => response.data)
        .then((data) => data.data[0].mal_id);
      anime["image_url"] = await axios.get(`https://api.jikan.moe/v4/anime/${animeID}/pictures`)
        .then((response) => response.data)
        .then((data) => data.data[0].jpg.image_url); 
    });
    //console.log("Anime Data:", animeData)
    setAnimes(animeData); 
    }
  return (
    <div className="App">
      {currentView === "AllAnime" ? (
        <>
        <h1>Current Season Anime</h1>
        <AllAnimes
          animes={animes}
          setSelectedAnime={setSelectedAnime}
          setCurrentView={setCurrentView}
        />
        </>
      ) : (
        <>
        <SingleAnime 
          selectedAnime={selectedAnime}
        />
        </>
      )}
    </div>
  );
}

export default App;
