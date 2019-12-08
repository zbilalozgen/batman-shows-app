import React, { Component } from "react";
import { getData } from "../redux/actionCreators";
import { Movie } from "../components";
import { connect } from "react-redux";
import LoadingScreen from "react-loading-screen";

import batarang from "../asset/batarang.svg";

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 6
    };
  }

  componentDidMount() {
    this.props.getData();
    window.addEventListener("scroll", this.scrollHandle);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandle);
  }

  scrollHandle = () => {
    if (
      document.documentElement.clientHeight + window.scrollY >=
      document.body.offsetHeight
    ) {
      this.setState(
        {
          index: this.state.index + 3
        },
        console.log(this.state.movies)
      );
    }
  };

  sortMovies = (movies, sort) => {
    if (sort === "") {
      return movies;
    } else if (sort === "ascending") {
      return [...movies].sort(function(a, b) {
        return new Date(b.show.premiered) - new Date(a.show.premiered);
      });
    } else if (sort === "descending") {
      return [...movies].sort(function(a, b) {
        return new Date(a.show.premiered) - new Date(b.show.premiered);
      });
    }
  };

  render() {
    const ShowMovies = this.sortMovies(this.props.movies, this.props.sort)
      .slice(0, this.state.index)
      .map(movie => {
        return <Movie key={movie.show.id} movie={movie.show} />;
      });
    const Loading = (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={batarang}
        text="Your Batman Movie's on its way  "
      >
        <div>Loadable content</div>
      </LoadingScreen>
    );
    const Err = <div>{this.props.error}</div>;
    if (this.props.loading) {
      return Loading;
    } else if (this.props.error) {
      return Err;
    } else {
      return ShowMovies;
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getData: movies => {
    dispatch(getData(movies));
  }
});

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading,
  error: state.error,
  sort: state.sort
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
