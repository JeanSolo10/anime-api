import React from "react";

export default function AddAnimeButton(props) {
    const { setFormView } = props;

    return (
        <>
            <button
                onClick={() => setFormView("Form")}
            >Add Anime</button>
        </>
    )
}