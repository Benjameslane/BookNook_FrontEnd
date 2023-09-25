import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewList from '../../components/ReviewList/ReviewList';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

const GOOGLE_API_BASE_URL = "https://www.googleapis.com/books/v1";

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axios.get(`${GOOGLE_API_BASE_URL}/volumes/${bookId}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBookDetails();
  }, [bookId]);

  // Fetch reviews for the book from your backend API here...

  return (
    <div>
      {/* Display book details here... */}
      <ReviewList reviews={reviews} />
      <ReviewForm bookId={bookId} />
    </div>
  );
};

export default BookDetailsPage;
