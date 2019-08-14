import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import NavBar from "../home/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class AirportInfo extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <h4 className="text-center"><i>This page is under development. Come back again later.</i></h4>
      <Card>
      <Card.Body>
      This page will display partner Airports. Nothing for now!
      </Card.Body>
      </Card>
      </div>
    );
  }
}

export default AirportInfo;
