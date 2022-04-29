import React, { useState, useEffect } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";

export default function AnimeForm(props) {
    const [animeName, setAnimeName] = useState();
    const { setFormView, setAnimes, animes } = props;

    const setNameHandler = (event) => {
        setAnimeName(event.target.value);
    };

    const addAnime = async (event) => {
        event.preventDefault();
        if (!animeName) return alert("Name is required!");
        const anime = await axios
            .post("/api/v1/anime", {
                name: animeName,
            })
            .then((response) => {
                if (response.status === 201) {
                    alert("Anime Added!")
                }
                return response.data;
            })
            .then((data) => data.results[0])
            .catch((error) => {
                throw new Error(error.message)
            });
        setAnimes([anime, ...animes]);
        setFormView("");
    }

    return (
        <>
            <button onClick={() => setFormView("")}>Back to Home</button>
            <h1>Add Anime!</h1>
            <form className="anime-form">
                <label>Anime Name:</label>
                <input 
                    type="text" 
                    placeholder="name..." 
                    onChange={setNameHandler}>
                </input>
                <input 
                    type='submit' 
                    value='Add Anime' 
                    onClick={addAnime}
                />
            </form>
        </>
    )
}