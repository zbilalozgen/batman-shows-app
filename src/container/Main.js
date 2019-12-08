import React from "react";
import { Route, Switch } from "react-router";
import { Homepage, MovieDetail } from "../pages";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/moviedetail/:id" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default Main;
