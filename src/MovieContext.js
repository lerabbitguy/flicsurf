import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [alreadyWatchedList, setAlreadyWatchedList] = useState([]);
  const [wantToWatchList, setWantToWatchList] = useState([]);

  const addToWatched = (movie) => {
    setAlreadyWatchedList((prevList) => [...prevList, movie]);
  };

  const addToWantToWatch = (movie) => {
    setWantToWatchList((prevList) => [...prevList, movie]);
  };

  return (
    <MovieContext.Provider
      value={{
        alreadyWatchedList,
        wantToWatchList,
        addToWatched,
        addToWantToWatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
