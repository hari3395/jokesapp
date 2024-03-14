import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function HomePage() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=en&amount=10');
        const data = await response.json();
        setJokes(data.jokes);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch jokes. Please try again later.');
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className='bg-container'>
      <h1 className='heading'>Jokes</h1>
      <table>
        <thead>
          <tr>
            <th className='tb-heading'>We've got the jokes guaranteed to bring on serious laughs.</th>
          </tr>
        </thead>
        <tbody className='tb-body'>
          {jokes.map((joke) => (
            <tr key={joke.id} className='mr-2'>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;