import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('Click the button to get a joke!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('https://random-joke-api-qp57.onrender.com/api/jokes/random');
      setJoke(response.data.joke);
    } catch (error) {
      setError('Failed to fetch joke');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Random Joke</h1>
      <div className="joke">
        {loading ? 'Loading...' : error ? error : joke}
      </div>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? 'Fetching...' : 'Get Joke'}
      </button>
    </div>
  );
};

export default App;
