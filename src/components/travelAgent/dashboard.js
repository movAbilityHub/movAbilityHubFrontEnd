import React, { Component } from "react";

import "../../assets/styles/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./navbar";

class TravelAgent extends Component {
  render() {
    return (
      <div className="min-vh-100">
        <Navbar />
      </div>
    );
  }
}

export default TravelAgent;
