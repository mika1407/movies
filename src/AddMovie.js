import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name, price }]);
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        placeholder="name here..."
        value={name}
        onChange={updateName}
      />
      <input
        type="text"
        name="price"
        placeholder="price here"
        value={price}
        onChange={updatePrice}
      />
      <button>Add movie and price</button>
    </form>
  );
};

export default AddMovie;
