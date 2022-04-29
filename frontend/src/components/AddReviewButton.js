import React from "react";

export default function AddReviewButton(props) {
    const { setReviewForm } = props;

    return (
        <>
            <button
                onClick={() => setReviewForm("ReviewForm")}
            >Add Review</button>
        </>
    )
}