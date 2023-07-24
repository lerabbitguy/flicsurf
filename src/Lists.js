import React, { useContext } from "react";
import { MovieContext } from "./MovieContext"; // Import the MovieContext

const Lists = () => {
  const { alreadyWatchedList, wantToWatchList } = useContext(MovieContext);

  return (
    <div>
      <h2>Already Watched List</h2>
      <ul>
        {alreadyWatchedList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h2>Want to Watch List</h2>
      <ul>
        {wantToWatchList.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
