import React from "react";
import "./App.css";
import "../src/style/main.scss";
import { Header } from "./components";
import { Link } from "react-router-dom";

import Main from "./container/Main";

function App(props) {
  return (
    <>
      <Link to="/">
        <Header className="logo" />
      </Link>
      <Main />
    </>
  );
}

export default App;
