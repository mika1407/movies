import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
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
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
