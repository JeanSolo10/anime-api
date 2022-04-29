import React from "react";

export default function AddAnimeButton(props) {
    const { setFormView } = props;

    return (
        <>
            <button class="add-anime-btn"
                onClick={() => setFormView("Form")}
            >Add Anime</button>
        </>
    )
}