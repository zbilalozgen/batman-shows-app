import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

function Movie(props) {
  const { name, rating, premiered, id, image, genres } = props.movie;
  const nullReview = <span id="null-review">Waiting for reviews!</span>;
  return (
    <>
      <Link className="movie-card__link " to={`/moviedetail/${id}`}>
        <div className="movie-card container__col-4">
          <img src={image.medium} alt={name} />
          <div className="movie-card__container">
            <h1 className="movie-card_title">{name}</h1>

            <h3>
              {rating.average ? (
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  starCount={10}
                  value={rating.average}
                />
              ) : (
                nullReview
              )}
            </h3>
            <h4>Premier date: {premiered}</h4>
            {genres.map(genre => {
              return (
                <span
                  key={Math.random()}
                  className="movie-card__subtitle"
                >{`${genre}`}</span>
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Movie;
