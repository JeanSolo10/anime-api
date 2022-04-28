import React from "react";

export default function AllAnimes(props) {
    const { animes, setSelectedAnime, setCurrentView } = props;

    return (
        <section className="all-anime">
            <div className="all-anime-container">
            {animes.map((anime) => {
                const {id, name, image_url} = anime;
                console.log(anime);
                return (
                    <div key={`anime${id}`} className="anime">
                        <h2 className="anime-title">{name}</h2>
                        <img
                            className="anime-image"
                            alt="anime view"
                            src={image_url ? image_url : '/images/anime_placeholder.jpg'}
                            onClick={() => {
                                setSelectedAnime(id);
                                setCurrentView("SinglePhoto");
                            }}
                        />
                    </div>
                );
            })}
            </div>
        </section>
    );
}

//0: {id: 14, name: 'Naruto'}
//1: {id: 15, name: 'Spy x Family'}