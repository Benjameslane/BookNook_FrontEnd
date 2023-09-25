import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ bookId }) => {
  const [review, setReview] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make an Axios request to save the review for the specific book.
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
