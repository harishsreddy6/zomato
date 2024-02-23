import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ZomatoRecommends = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/zomato/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Zomato Recommends</h1>
      <ul>
        {recommendations.map((restaurant, index) => (
          <li key={index}>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisine}</p>
            <p>Location: {restaurant.location}</p>
            {/* Add more restaurant details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZomatoRecommends;
