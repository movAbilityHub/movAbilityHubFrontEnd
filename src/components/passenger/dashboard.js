import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import "../../assets/styles/navbar.css";
import "../../assets/styles/taDashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/tapaOpenRequests.css";

import OpenRequests from "./openRequests";
import ClosedRequests from "./closedRequests";
import CareReceiver from "./careReceiver";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NewRequests from "./newRequest";
import Button from "react-bootstrap/Button";

class Passenger extends Component {
  constructor() {
    super();
    document.title = "Dashboard";
    this.signOut = this.signOut.bind(this);
  }
  signOut(e) {
    localStorage.removeItem("session");
    sessionStorage.removeItem("session");
    if (
      !localStorage.getItem("session") &&
      !sessionStorage.getItem("session")
    ) {
      this.props.history.push("/");
    }
  }
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
                to="/Passenger/Dashboard/"
              >
                New Request
              </Nav.Link>
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Passenger/Dashboard/OpenRequests"
              >
                Open Requests
              </Nav.Link>
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Passenger/Dashboard/ClosedRequests"
              >
                Closed Requests
              </Nav.Link>
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Passenger/Dashboard/CareReceiver"
              >
                Care Receiver/Passenger
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Button onClick={this.signOut} className="rounded">
                Sign Out
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="wrapper">
          <Switch>
            <Route exact path="/Passenger/Dashboard/" component={NewRequests} />
            <Route
              path="/Passenger/Dashboard/OpenRequests"
              component={OpenRequests}
            />
            <Route
              path="/Passenger/Dashboard/ClosedRequests"
              component={ClosedRequests}
            />
            <Route
              path="/Passenger/Dashboard/CareReceiver"
              component={CareReceiver}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Passenger;
