import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = { movies: getMovies() };

  handleDelete = movie => {
    console.log(movie._id);
  };

  render() {
    return (
      <div>
        <h1>Showing {this.state.movies.length} movies in the database.</h1>
        <table className="table">
          <thead>{this.getTableHeader()}</thead>
          <tbody>{this.state.movies.map(m => this.getMovieRow(m))}</tbody>
        </table>
      </div>
    );
  }

  getTableHeader() {
    const headers = ["Title", "Genre", "Stock", "Rating", ""];
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

  getMovieRow(movie) {
    return (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.handleDelete(movie)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Movies;
