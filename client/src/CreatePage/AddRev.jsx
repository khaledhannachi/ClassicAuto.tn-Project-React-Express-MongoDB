import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';

const AddRev = ({ loggedUser }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleChange = (selectedValue) => {
    console.log(selectedValue);
    setRating(selectedValue);
  };

  useEffect(() => {
    if (loggedUser) {
      axios
        .get(`http://localhost:8000/api/users/${loggedUser._id}`)
        .then((res) => {
          // Handle the response data if needed
        })
        .catch((err) => console.error(err));
    }
  }, [loggedUser]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Ensure loggedUser is not null before accessing _id
    if (loggedUser) {
      const updated = {
        rating,
        review,
      };

      axios
        .patch(`http://localhost:8000/api/users/${loggedUser._id}`, updated)
        .then(() => {
          setReview('');
          setRating(0);
          // Handle any additional logic after submitting
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className='flex items-center justify-center'>

<div class="py-6 flex flex-col justify-center sm:py-12">
  <div class="py-3 sm:max-w-xl sm:mx-auto">
    <div class="min-w-1xl flex flex-col rounded-xl shadow-lg">
      <div class="px-12 py-5">
        <h2 class="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
      </div>
      <form onSubmit={submitHandler} class="bg-gray-200 w-full flex flex-col items-center">
        <div class="flex flex-col items-center py-6 space-y-3">
          <span class="text-lg text-gray-800">How was Your Experience on Classicauto.tn?</span>
          <div class="flex space-x-3">
          <Rating
          className=''
          style={{ maxWidth: 180 }}
          onChange={handleChange}
          value={rating}
        />
          </div>
        </div>
        <div class="w-3/4 flex flex-col">
          <textarea value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder='Enter your review...'  rows="3" class="p-4 text-gray-500 rounded-xl resize-none"></textarea>
          <button type='submit' class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">Submit Review</button>
        </div>
      </form>
    </div>

  </div>
</div>

    </div>
  );
};

export default AddRev;
