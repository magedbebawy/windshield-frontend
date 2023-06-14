import React from 'react';
import { useState } from 'react';
import Stars from '../stars/Stars';
import './Review.css';
import reviews from '../../data/reviews.json';
import { FcNext, FcPrevious } from 'react-icons/fc';


function Review() {
    
    const [currentReview, setCurrentReview ] = useState(reviews[0]);

    const nextReview = () => {
        if(reviews.indexOf(currentReview) < reviews.length - 1) {
            setCurrentReview(reviews[reviews.indexOf(currentReview) + 1]);
        }else {
            setCurrentReview(reviews[0]);
        }
    };

    const previousReview = () => {
        if(reviews.indexOf(currentReview) >= 1) {
            setCurrentReview(reviews[reviews.indexOf(currentReview) - 1]);
        }else {
            setCurrentReview(reviews[reviews.length - 1]);
        }
    }
    console.log(currentReview);
    return ( 
        <div className="review">
            <h1>Reviews</h1>
            <div className='line'></div>
            <h2>{currentReview.author}</h2>
            <p><Stars value={currentReview.rating} /></p>
            <p>{currentReview.text}</p>
            <div className='reviewdot'>
                <div onClick={previousReview}><FcPrevious size={25}/></div>
                <div onClick={nextReview}><FcNext size={25}/></div>
            </div>
        </div>
    )
}

export default Review;