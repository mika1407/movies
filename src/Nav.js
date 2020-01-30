import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div style={NavStyle}>
      <h3 style={h3}>Mika Tiihonen</h3>
      <p style={p}>List of Movies: {movies.length}</p>
    </div>
  );
};

const NavStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px"
};

const h3 = {
  textAlign: "left",
  justifyContent: "center",
  alignItems: "center"
};

const p = {
  textAlign: "center"
};

export default Nav;
