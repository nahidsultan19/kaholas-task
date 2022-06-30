import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const [rating, setRating] = useState(null);
    return (
        <div className='flex'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input type="radio" name="rating" value={ratingValue} className='hidden' onClick={() => setRating(ratingValue)} />
                        <FaStar size={20} className={ratingValue <= rating ? "text-[#FAAD1E]" : "text-slate-400"} />
                    </label>
                );
            })}
            <div className='ml-4'>
                <p>{rating} reviews for this class</p>
            </div>
        </div>
    );
};

export default Reviews;