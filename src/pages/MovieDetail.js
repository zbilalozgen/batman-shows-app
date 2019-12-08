import React from "react";
import Detail from "../components/Detail";
import { connect } from "react-redux";
import { getDetail } from "../redux/actionCreators";
import LoadingScreen from "react-loading-screen";
import batarang from "../asset/batarang.svg";

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }

  render() {
    const Loading = (
      <LoadingScreen
        loading={true}
        bgColor="#f1f1f1"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        logoSrc={batarang}
        text="Your Batman Movie's on its way  "
      ></LoadingScreen>
    );
    const Err = <div>{this.props.error}</div>;

    if (this.props.loading) {
      return Loading;
    } else if (this.props.error) {
      return Err;
    } else {
      return <Detail movieDetail={this.props.movieDetail} />;
    }
  }
}

const mapDispatchToProps = dispatch => ({
  getDetail: id => {
    dispatch(getDetail(id));
  }
});

const mapStateToProps = state => ({
  movieDetail: state.movieDetail,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
