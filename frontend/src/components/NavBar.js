import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <nav className="navbar-header">
          <div className="github-link">
            <a href="https://github.com/JeanSolo10/anime-api">Github Repository</a>
          </div>
          <div className="api-title">
            <p>Anime-API</p>
          </div>
      </nav>
    </div>
  );
}