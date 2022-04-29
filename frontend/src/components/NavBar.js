import React from "react";
import '../styles/NavBar.css';

export default function Navbar(props) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
          <div className="api-title">
            <p>Anime-API</p>
          </div>
          <div className="github-link">
            <a href="https://github.com/JeanSolo10/anime-api">GitHub Repository</a>
          </div>
      </nav>
    </div>
  );
}