import axios from "axios";
import React, { useState, useEffect } from "react";
import BackButton from './BackButton';
import ReviewForm from './ReviewForm';
import AddReviewButton from './AddReviewButton';

axios.defaults.baseURL = "http://localhost:5000";

export default function SingleAnime(props) {
    const { selectedAnime, setCurrentView } = props;
    const [reviews, setReviews] = useState([]);
    const [reviewForm, setReviewForm] = useState("");

    useEffect(() => {
        fetchReviewData();
      }, []);

    const fetchReviewData = async () => {
        const reviews = await axios.get(`/api/v1/reviews/?anime_id=${selectedAnime.id}`)
            .then((response) => response)
            .then((data) => data.data.results);
        setReviews(reviews);
    }
      
    return (
        <>
        { reviewForm !== "ReviewForm"  ?
            (
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
                            <AddReviewButton 
                                setReviewForm={setReviewForm}
                            />
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
                            <AddReviewButton 
                                setReviewForm={setReviewForm}
                            />
                        </>
                        )}
                    </div>
                </section>
            ) : 
            
            (
                <ReviewForm 
                    reviews={reviews}
                    setReviews={setReviews}
                    setReviewForm={setReviewForm}
                    selectedAnime={selectedAnime}
                />
            ) 
        }
        </>
    );
}