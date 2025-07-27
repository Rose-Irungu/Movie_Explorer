import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

export default function Gallery() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://jsonfakery.com/movies/simple-paginate";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.data.slice(0, 10));
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
          setLoading(false);
        });
    }, 1000);
  }, []);

  if (loading) return <p>Loading movies...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          releaseDate={movie.release_date}
          poster={movie.poster_path}
        />
      ))}
    </div>
  );
}
