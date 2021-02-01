import MovieService from '../services/MovieService';
import React, { useState, useEffect } from "react";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  
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
                  </td>
                </tr>
              ))}
            </tbody> 
        </table>
      </div>
      <div className="col-md-6">
      </div>
    </div>
  )
}

export default MovieList;