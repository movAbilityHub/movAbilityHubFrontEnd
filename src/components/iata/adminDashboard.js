import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import "../../assets/styles/navbar.css";
import VerifyRegistrationTravelAgent from "./verifyRegistrationTA";
import logo from "../../assets/images/logo.png";

class Iataadmin extends Component {
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
            <img src={logo} alt="logo" className="w-50 h-50" />
          </Navbar.Brand>
          <div className="placeHolder" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                className="active rounded"
                as={Link}
                to="/IATA/AdminDashboard/"
              >
                Registration Requests
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
              path="/IATA/AdminDashboard/"
              component={VerifyRegistrationTravelAgent}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Iataadmin;
