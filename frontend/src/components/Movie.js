import MovieService from "../services/MovieService";
import React, { useState, useEffect } from "react";

const Movie = props => {
  const initialMovieState = {
    id: null,
    title: '',
    cover: '',
    synopsis: '',
    year: 0,
  };
  const [currentMovie, setCurrentMovie]  = useState(initialMovieState);
  const [message, setMessage] = useState('');

  const getMovie = id => {
    MovieService.getById(id)
    .then(res => {
      setCurrentMovie(res);
      console.log(res);
    })
    .catch(e => {
      console.log(e);
      alert('Ocurrió un error');
    });
  }

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id])
  return (
    <div>Película</div>
  )
}

export default Movie;