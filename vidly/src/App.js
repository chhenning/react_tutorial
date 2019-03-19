import React, { Component } from "react";

import Movies from "./components/movies";

import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </main>
    );
  }
}

export default App;
