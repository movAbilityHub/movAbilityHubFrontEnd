import React, { Component } from "react";

import "../../assets/styles/notFound.css";
import logo from "../../assets/images/logo.png";

class NotFound extends Component {
  render() {
    return (
      <div className="navBackground text-center vh-100">
        <a href="/">
            <img src={logo} alt="logo" className="mt-4 col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 mx-auto" width="20%" />
        </a>        
        <h1 className="text-warning centered">NOT AUTORIZED</h1>
        <br></br>
        <h5 className="text-white">
          <a href="/">Click here to go back to Home</a>
        </h5>
      </div>
    );
  }
}

export default NotFound;
