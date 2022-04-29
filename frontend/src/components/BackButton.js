import React from "react";

export default function BackButton(props) {
    const { setCurrentView } = props;
    return (
        <>
            <button class="back-btn"
                onClick={() => setCurrentView("AllAnime")}
            >Go Back</button>
        </>
    )
}