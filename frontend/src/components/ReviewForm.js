import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ReviewForm.css";
axios.defaults.baseURL = "http://localhost:5000";

export default function ReviewForm(props) {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState();
    const { reviews, setReviews, setReviewForm, selectedAnime } = props;

    const setRatingHandler = (event) => {
        setRating(event.target.value);
    };

    const setCommentHandler = (event) => {
        setComment(event.target.value);
    };

    const addReview = async (event) => {
        event.preventDefault();
        if (!rating) return alert("Rating is required!");
        if (rating < 0 || rating > 10) return alert("Rating must be a number between 1-10");
        const payload = comment ? 
            { 
                anime_id: selectedAnime.id,
                rating: rating,
                comment: comment
            } : 
            {
                anime_id: selectedAnime.id,
                rating: rating
            }

        const review = await axios
            .post(`/api/v1/reviews/`, payload)
            .then((response) => {
                if (response.status === 201) {
                    alert("Review Added!")
                }
                return response.data;
            })
            .then((data) => {
                return data.results
            })
            .catch((error) => {
                throw new Error(error.message)
            });
        setReviews([review, ...reviews]);
        setReviewForm("");
    }

    return (
        <>
            <div className="anime-form-container">
                <button class="review-back-btn" onClick={() => setReviewForm("")}>Go Back</button>
                <h1>Add Review!</h1>
                <form className="anime-form">
                    <label>Rating:</label>
                    <input 
                        type="number" 
                        min={0}
                        max={10}
                        placeholder="rating..." 
                        onChange={setRatingHandler}>
                    </input>
                    <br />
                    <label>Comment:</label>
                    <br />
                    <textarea 
                        name="comment"
                        rows={4}
                        cols={50}
                        placeholder="comment..." 
                        onChange={setCommentHandler}>
                    </textarea>
                    <br />
                    <input 
                        type='submit' 
                        value='Add Review' 
                        onClick={addReview}
                    />
                </form>
            </div>
        </>
    )
}