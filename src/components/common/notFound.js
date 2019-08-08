import React, { Component } from "react";

import "../../assets/styles/notFound.css";
class NotFound extends Component {
  render() {
    return (
      <div className="navBackground text-center vh-100">
        <h1 className="text-white">
          <i className="mov">mov</i>
          <b className="ability">Ability</b> Hub
        </h1>
        <h1 className="text-warning centered">404 NOT FOUND</h1>
        <h3 className="text-white">Page does not exist</h3>
      </div>
    );
  }
}

export default NotFound;
