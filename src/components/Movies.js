import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieItems from "./MovieItems";
import {Link} from "react-router-dom";
export default function Movies() {
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=bc9494ce80d96b4eefaffdeea5679261"
    );
    let datajson = await data.json();
    let m = datajson.results;
    console.log("wejkdsdjklsdffjlhds");
    if (m) setMovie(m.slice(0, 15));
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <H>Explore Trending movies/shows</H>
      <Container>
        {movie.map((item, idx) => {
          if(item.media_type==='movie')
          {
            return (
            <MovieItems movieitem={item} key={idx} />
            );
          }
        })}
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 80vh;
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  background-color: #14213d;
`;
// const Item = styled.div`
//   width: 20%;
//   height: 45%;
//   margin: 10px;
//   align-items: center;
//   border: 1px solid black;
// `;
const H = styled.h1`
  color: white;
  margin-top: 2%;
  margin-left: 2.2%;
`;
