import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavigationBar extends Component {
  render() {
    return (
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
          <b className="ability">Ability</b> Hub{" "}
          <sub className="smallFont">by IATA</sub>
        </Navbar.Brand>
        <div className="placeHolder" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav.Link className="active" href="/IATA">
            IATA
          </Nav.Link>
          <Nav.Link className="active" href="/Airline">
            Airline
          </Nav.Link>
          <Nav.Link className="active" href="/Airport">
            Airport
          </Nav.Link>
          <Nav.Link className="active" href="/TravelAgency">
            Travel Agency
          </Nav.Link>
          <Nav className="ml-auto">
            <Nav.Link className="active" href="/Signup">
              Sign Up
            </Nav.Link>
            <Nav.Link className="active" href="/Login">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
