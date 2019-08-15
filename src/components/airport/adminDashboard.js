import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import AddAirportStaff from "./addAirportStaff";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "../../assets/styles/navbar.css";

class AirportAdmin extends Component {
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
            <sub className="smallFont"><i>by IATA</i></sub>
          </Navbar.Brand>
          <div className="placeHolder" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Airport/AdminDashboard/"
              >
                Add Airport Staff
              </Nav.Link>
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/Airport/AdminDashboard/Staff"
              >
                Airport Staff Agents
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
            <Route
              exact
              path="/Airport/AdminDashboard/"
              component={AddAirportStaff}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default AirportAdmin;
