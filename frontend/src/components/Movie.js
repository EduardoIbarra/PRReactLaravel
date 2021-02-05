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
      setCurrentMovie(res.data);
      console.log(res.data);
    })
    .catch(e => {
      console.log(e);
      alert('Ocurrió un error');
    });
  }

  const updateMovie = () => {
    MovieService.update(currentMovie.id, currentMovie)
    .then(res => {
      console.log(res.data);
      setMessage('The movie was updated.');
    })
    .catch(err => {
      console.log(err);
      setMessage('There was an error...');
    });
  }

  useEffect(() => {
    getMovie(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const {key, value} = event.target;
    setCurrentMovie({...currentMovie, [key]: value});
  }

  return (
    <div>
      {currentMovie ? (
    <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              defaultValue={currentMovie.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cover">Portada</label>
            <input
              type="text"
              className="form-control"
              id="cover"
              required
              defaultValue={currentMovie.cover}
              onChange={handleInputChange}
              name="cover"
            />
          </div>

          <div className="form-group">
            <label htmlFor="synopsis">Sinopsis</label>
            <input
              type="text"
              className="form-control"
              id="synopsis"
              required
              defaultValue={currentMovie.synopsis}
              onChange={handleInputChange}
              name="synopsis"
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Año</label>
            <input
              type="number"
              className="form-control"
              id="year"
              required
              defaultValue={currentMovie.year}
              onChange={handleInputChange}
              name="year"
            />
          </div>
          <br />
          <button onClick={updateMovie} className="btn btn-primary">
            Guardar Película
          </button>
          <div>
            <p>{message}</p>
          </div>
        </div>
        ): (
          <div>
            <br />
            <p>Please select a movie...</p>
          </div>
        )}
        </div>
  )
}

export default Movie;