import React, { Component } from "react";
import Liked from "./common/liked";

import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = movie => {
    // make a copy of the movies array excluding the one to be deleted
    const movies = this.state.movies.filter(m => m._id !== movie._id);

    // update the state of the component by overriding the current movie array.
    this.setState({ movies: movies });
  };

  render() {
    const { length: movie_count } = this.state.movies;

    if (movie_count === 0) return <p>There are no movies in the database.</p>;
    else
      return (
        <div>
          <p>Showing {movie_count} movies in the database.</p>

          <table className="table">
            <thead>{this.getTableHeader()}</thead>
            <tbody>{this.state.movies.map(m => this.getMovieRow(m))}</tbody>
          </table>
        </div>
      );
  }

  getTableHeader() {
    const headers = ["Title", "Genre", "Stock", "Rating", "Liked", ""];
    return (
      <tr>
        {headers.map(h => (
          <th key={h} scope="col">
            {h}
          </th>
        ))}
      </tr>
    );
  }

  handleLikedClick = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  getMovieRow(movie) {
    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Liked
            onLiked={() => this.handleLikedClick(movie)}
            liked={movie.liked}
          />
        </td>
        <td>
          <button
            onClick={() => this.handleDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movies;
