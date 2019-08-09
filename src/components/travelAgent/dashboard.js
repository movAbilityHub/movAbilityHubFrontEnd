import React, { Component } from "react";

import "../../assets/styles/navbar.css";
import "../../assets/styles/taDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./navbar";
import NewRequests from "./newRequest";

class TravelAgent extends Component {
  render() {
    return (
      <div className="vh-100">
        <Navbar />
        <div className="wrapper">
        <NewRequests />
        </div>
      </div>
    );
  }
}

export default TravelAgent;
