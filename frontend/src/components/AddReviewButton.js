import React from "react";
//import "../styles/Button.css";

export default function AddReviewButton(props) {
    const { setReviewForm } = props;

    return (
        <>
            <button class="add-review-btn"
                onClick={() => setReviewForm("ReviewForm")}
            >Add Review</button>
        </>
    )
}