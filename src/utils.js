import { data } from "./movieinfo_data";
import { showdata } from "./showinfo_data";

export const getMovieById = (id) => {
  const movie = data.find((movie) => movie.id === parseInt(id));
  return movie || null;
};

export const getShowById = (id) => {
    const movie = showdata.find((movie) => movie.id === parseInt(id));
    return movie || null;
  };
