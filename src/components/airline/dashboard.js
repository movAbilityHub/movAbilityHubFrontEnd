import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import OpenRequests from "./openRequests";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../assets/styles/navbar.css";

class Airline extends Component {
  render() {
    return (
      <div className="vh-100">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant="dark"
          fixed="top"
          sticky="top"
          className="navBackground"
        >
          <Navbar.Brand href="/">
            <i className="mov">mov</i>
            <b className="ability">Ability</b> Hub
            <sub className="smallFont">by IATA</sub>
          </Navbar.Brand>
          <div className="placeHolder" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Airline/Dashboard/"
              >
                Open Requests
              </Nav.Link>
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Airline/Dashboard/ClosedRequests"
              >
                Closed Requests
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link className="active rounded">Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="wrapper">
          <Switch>
            <Route exact path="/Airline/Dashboard/" component={OpenRequests} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Airline;
