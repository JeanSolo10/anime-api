import React, { useState, useEffect } from "react";
import AnimeForm from "./AnimeForm";
import AddAnimeButton from "./AddAnimeButton";

export default function AllAnimes(props) {
    const [formView, setFormView] = useState();
    const { animes, setSelectedAnime, setCurrentView, setAnimes } = props;

    return (
        <section className="all-anime">
            { formView !== "Form" ?
                (
                <div className="all-anime-container">
                    <AddAnimeButton 
                        setFormView={setFormView}
                    />
                    {animes.map((anime) => {
                        let {id, name, image_url} = anime;
                        image_url = image_url ? image_url : '/images/anime_placeholder.jpg';
                        return (
                            <div key={`anime${id}`} className="anime">
                                <h2 className="anime-title">{name}</h2>
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
                        );
                    })}
                </div>
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