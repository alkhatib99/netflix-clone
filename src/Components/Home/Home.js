import React, { useEffect, useState } from "react";
import MovieList from "../MovieList/MovieList.js";
function Home() {
  const [movies, setMovies] = useState();
  const fetchData = async () => {
    try {
      const response = await fetch(`https://movie-prep.herokuapp.com/trending`);
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>this is my Home</h1>
      <MovieList movies={movies} />
    </>
  );
}

export default Home;
