import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";

import Navbar from "./navbar";

class TravelAgency extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default TravelAgency;
