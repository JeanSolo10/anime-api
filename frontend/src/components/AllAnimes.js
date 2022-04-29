import React, { useState, useEffect } from "react";
import AnimeForm from "./AnimeForm";
import AddAnimeButton from "./AddAnimeButton";
import "../styles/AllAnimes.css";

export default function AllAnimes(props) {
    const [formView, setFormView] = useState();
    const { animes, setSelectedAnime, setCurrentView, setAnimes } = props;

    return (
        <section className="all-anime">
            { formView !== "Form" ?
                (
                <>
                    <AddAnimeButton setFormView={setFormView} />
                    <div className="all-anime-container">
                        {animes.map((anime) => {
                            let {id, name, image_url} = anime;
                            image_url = image_url ? image_url : '/images/anime_placeholder.jpg';
                            return (
                                <div key={`anime${id}`} className="anime">
                                    <div className="anime-title">
                                        <h2>{name}</h2>
                                    </div>
                                    <div className="anime-images">
                                        <img
                                            className="anime-image"
                                            alt="anime view"
                                            src={image_url}
                                            onClick={() => {
                                                setSelectedAnime({
                                                    id: id,
                                                    image: image_url,
                                                    name: name
                                                });
                                                setCurrentView("SingleAnime");
                                            }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
                ) : (
                    <>
                        <AnimeForm 
                            animes={animes}
                            setFormView={setFormView}
                            setAnimes={setAnimes}
                        />
                    </>
                )
            }
        </section>
    );
}