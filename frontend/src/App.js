import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import AddMovie from "./components/AddMovie";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/movies" className="navbar-brand">
          Multitut
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/movies"} className="nav-link">
              Películas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Agregar
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/movies"]} component={MovieList} />
          <Route exact path="/add" component={AddMovie} />
          <Route path="/movies/:id" component={Movie} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
