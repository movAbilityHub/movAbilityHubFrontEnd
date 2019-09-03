import React, { Component } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";
import "../../assets/styles/taDashboard.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../assets/images/logo.png";
class NavBar extends Component {
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
          <img src={logo} alt="logo" className="logoScale" />
        </Navbar.Brand>
        <div className="placeHolder" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="active rounded" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="active rounded" as={Link} to="/IATA">
              IATA
            </Nav.Link>
            <Nav.Link className="active rounded" as={Link} to="/Airport">
              Airport
            </Nav.Link>
            <Nav.Link className="active rounded" as={Link} to="/Airline">
              Airline
            </Nav.Link>
            <Nav.Link className="active rounded" as={Link} to="/TravelAgency">
              Travel Agency
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="active rounded" as={Link} to="/Register">
              Sign Up
            </Nav.Link>
            <Nav.Link className="active rounded" as={Link} to="/Login">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavBar;
