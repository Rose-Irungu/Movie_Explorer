import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Gallery() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = 'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies';

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          setLoading(false);
          console.log(data)
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    }, 1000); 
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="gallery">
      {movies.map((movie) => (
        <MovieCard />
      ))}
    </div>
  );
}