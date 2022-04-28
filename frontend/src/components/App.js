import React, { useState, useEffect } from "react";
import '../App.css';
import AllAnimes from './AllAnimes';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <AllAnimes />
    </div>
  );
}

export default App;
