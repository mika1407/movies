import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Batman",
      price: "€12",
      id: 12345
    },
    {
      name: "Star Wars",
      price: "€17",
      id: 44555
    },
    {
      name: "Joker",
      price: "€13",
      id: 88778
    }
  ]);
  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} />
      ))}
    </div>
  );
};

export default MovieList;
