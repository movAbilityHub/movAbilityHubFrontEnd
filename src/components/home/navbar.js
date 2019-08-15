import React, { Component } from "react";
import { Route, Switch, Link, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";
import "../../assets/styles/taDashboard.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Iata from "./iata";
import Airline from "./airline";
import Airport from "./airport";
import TravelAgency from "./travelAgency";
import HomeLanding from "./homeLanding";
import Login from "../login/login";
import Register from "../register/Register";

class NavBar extends Component{

    render(){
    return(
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