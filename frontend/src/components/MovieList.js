import MovieService from '../services/MovieService';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  
  useEffect(() => {
    retrieveMovies();
  }, [])

  const retrieveMovies = () => {
    MovieService.getAll()
    .then(res => {
      setMovies(res.data);
      console.log(res.data);
    })
    .catch(err => {
      alert('Ocurrió un error');
      console.log(err);
    })
  }

  const refreshList = () => {
    retrieveMovies();
  }

  const setActiveMovie = (movie, index) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  }

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Películas</h4>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Título</th>
              <th>Año</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {movies &&
              movies.map((movie, index) => (
                <tr
                  key={index}
                >
                  <td>
                    {movie.id}
                  </td>
                  <td>
                    {movie.title}
                  </td>
                  <td>
                    {movie.year}
                  </td>
                  <td>
                    <i className="bi bi-eye" onClick={() => setActiveMovie(movie, index)}></i>
                  </td>
                </tr>
              ))}
            </tbody> 
        </table>
      </div>
      <div className="col-md-6">
      {currentMovie ? (
          <div>
            <h4>Película</h4>
            <div>
              <label>
                <strong>Título:</strong>
              </label>{" "}
              {currentMovie.title}
            </div>
            <div>
              <label>
                <strong>Sinopsis:</strong>
              </label>{" "}
              {currentMovie.synopsis}
            </div>
            <div>
              <label>
                <strong>Año:</strong>
              </label>{" "}
              {currentMovie.year}
            </div>
            <div>
              <img className="img-fluid" src={currentMovie.cover} />
            </div>

            <Link
              to={"/movies/" + currentMovie.id}
              className="badge badge-warning"
            >
              Editar
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Has click en una película...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MovieList;