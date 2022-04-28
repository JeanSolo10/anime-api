import React, { useState, useEffect } from "react";
import '../App.css';
import AllAnimes from './AllAnimes';
import SingleAnime from "./SingleAnime";
import Navbar from "./NavBar";
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
        .then((response) => response.data.results)
        .then((data) => data);
    setAnimes(animeData); 
  }
  return (
    <div className="App">
      <Navbar />
      {currentView === "AllAnime" ? (
        <>
          <h1>Current Season Anime</h1>
          <AllAnimes
            animes={animes}
            setAnimes={setAnimes}            
            setSelectedAnime={setSelectedAnime}
            setCurrentView={setCurrentView}
          />
        </>
      ) : (
        <>
          <SingleAnime 
            selectedAnime={selectedAnime}
            setCurrentView={setCurrentView}
          />
        </>
      )}
    </div>
  );
}

export default App;
