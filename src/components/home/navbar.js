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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="mx-auto">
            <Nav.Link href="/IATA">IATA</Nav.Link>
            <Nav.Link href="/Airline">Airline</Nav.Link>
            <Nav.Link href="/Airport">Airport</Nav.Link>
            <Nav.Link href="/TravelAgency">Travel Agency</Nav.Link>
          </Nav>
          <Nav variant="pills" className="ml-auto">
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="/Login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
