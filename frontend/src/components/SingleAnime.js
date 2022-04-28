import axios from "axios";
import React, { useState, useEffect } from "react";
import BackButton from './BackButton';
axios.defaults.baseURL = "http://localhost:5000";

export default function SingleAnime(props) {
    const { selectedAnime, setCurrentView } = props;
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviewData();
      }, []);

    const fetchReviewData = async () => {
        const reviews = await axios.get(`/api/v1/review/anime/${selectedAnime.id}`)
            .then((response) => response)
            .then((data) => data.data.result);
        setReviews(reviews);
    }
      
    return (
        <section className="single-anime">
            <BackButton
                setCurrentView={setCurrentView}
            />
            <div className="single-anime-image">
                <h1>{selectedAnime.name}</h1>
                <img src={selectedAnime.image} alt="#" />
                <h2>Reviews</h2>
                {reviews[0] ? (
                <>
                    {reviews.map((review) => {
                        let {comment, rating, created_at, id} = review;
                        const date = new Date(created_at).toLocaleDateString();
                        return (
                            <div key={`review${id}`} className="review">
                                <p className="rating">Rating: {rating}</p>
                                <p className="comment">Comment: {comment}</p>
                                <p className="date_posted">Posted: {date}</p>
                            </div>
                        );
                    })}
                </>
                ) : (
                <>
                    <h1>No reviews have been added</h1>
                </>
                )}
            </div>
      </section>
    );
}