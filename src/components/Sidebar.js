import React from "react";
import { connect } from "react-redux";
import { sortType } from "../redux/actionCreators";
import classNames from "classnames";

function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        <h4 className="sidebar__title">SORT BY PREMIERED DATE</h4>
        <p
          className={classNames({
            sidebar__item: true,
            sidebar__item__active: props.sort === "descending"
          })}
          onClick={() => {
            props.sortType("descending");
          }}
        >
          OLDEST TO NEWEST
        </p>

        <p
          className={classNames({
            sidebar__item: true,
            sidebar__item__active: props.sort === "ascending"
          })}
          onClick={() => {
            props.sortType("ascending");
          }}
        >
          NEWEST TO OLDEST{" "}
        </p>
        <p
          className={classNames({
            sidebar__item: true,
            sidebar__item__active: props.sort === ""
          })}
          onClick={() => {
            props.sortType("");
          }}
        >
          NO SORT
        </p>
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  sortType: sort => {
    dispatch(sortType(sort));
  }
});

const mapStateToProps = state => ({
  sort: state.sort
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
