import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id}>
          {/* Display each review details here... */}
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
