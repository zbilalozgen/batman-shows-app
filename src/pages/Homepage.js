import React from "react";
import { MovieList, Sidebar } from "../components";

function Homepage() {
  return (
    <>
      <div className="container__fluid">
        <div className="container__row">
          <div className="container__col-3">
            <Sidebar />
          </div>
          <div className="container__col-9">
            <div className="container__row" id="movie-list">
              <MovieList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
