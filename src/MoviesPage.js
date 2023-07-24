//UNUSED

import React from "react";
import { Link } from "react-router-dom";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster: "shawshank_redemption_poster.jpg",
    description: "A story of hope and friendship...",
    releaseDate: "1994-09-23",
    // Add more movie data here
  },
  // Add more movie entries here
];

const MoviesPage = () => {
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;