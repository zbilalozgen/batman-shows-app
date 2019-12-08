import React from "react";
import ReactHtmlParser from "react-html-parser";

function Detail(props) {
  const {
    name,
    summary,
    image,
    rating,
    genres,
    type,
    premiered
  } = props.movieDetail;

  const htmlSum = ReactHtmlParser(summary);

  return (
    <section className="card-container">
      <article className="c-card c-card--wide">
        <header className="c-card__header">
          <img src={image.medium} className="c-card__image" alt=" " />
        </header>

        <div className="c-card__body">
          <h1 className="c-card__title">{name}</h1>
          {genres.map(genre => {
            return (
              <span
                key={Math.random()}
                className="c-card__subtitle"
              >{`${genre}`}</span>
            );
          })}
          {htmlSum}
        </div>

        <footer className="c-card__footer">
          <span className="c-card__subtitle">{type}</span>
          <span className="c-card__subtitle">
            {rating.average
              ? `Rating: ${rating.average}`
              : "Waiting for reviews!"}
          </span>
          <span className="c-card__subtitle">{premiered}</span>
        </footer>
      </article>
    </section>
  );
}

export default Detail;
