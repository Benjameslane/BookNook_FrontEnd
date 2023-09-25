import React, { useEffect, useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from API
    axios.get('/api/user')  // Adjust the API endpoint accordingly
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user data: ", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome to BookNook</h1>
      {user && <p>Hello, {user.userName}!</p>}
      {!user && <p>Hello, Guest!</p>}
    </div>
  );
}

export default HomePage;

