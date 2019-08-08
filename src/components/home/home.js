import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/home.css";

import Navbar from "./navbar";

class Home extends Component {
  render() {
    return (
      <div className="min-vh-100">
        <Navbar />
      </div>
    );
  }
}

export default Home;
