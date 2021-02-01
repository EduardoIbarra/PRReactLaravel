import React, { useState } from "react";
import MovieDataService from "../services/MovieService";

function AddMovie() {
  const initialMovieState = {
    id: null,
    title: '',
    cover: '',
    synopsis: '',
    year: 0,
  };
  const [movie, setMovie] = useState(initialMovieState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMovie({ ...movie, [name]: value });
  };

  const saveMovie = () => {
    var data = {
      title: movie.title,
      cover: movie.cover,
      synopsis: movie.synopsis,
      year: movie.year
    };

    MovieDataService.create(data)
      .then(response => {
        setMovie({
          id: response.data.id,
          title: response.data.title,
          cover: response.data.cover,
          synopsis: response.data.synopsis,
          year: response.data.year
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newMovie = () => {
    setMovie(initialMovieState);
    setSubmitted(false);
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newMovie}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={movie.title}
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
              value={movie.cover}
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
              value={movie.synopsis}
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
              value={movie.year}
              onChange={handleInputChange}
              name="year"
            />
          </div>
          <br />
          <button onClick={saveMovie} className="btn btn-primary">
            Guardar Película
          </button>
        </div>
      )}
    </div>
  )
}

export default AddMovie;