import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";

import NewRequest from "./newRequest";
import OpenRequests from "./openRequests";
import ClosedRequests from "./closedRequests";
import CareReceiver from "./careReceiver";

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
          <HashRouter>
            <Nav variant="pills" className="mr-auto">
              <Nav.Link>
                <NavLink to="/">New Request</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/OpenRequests">Open Requests</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/ClosedRequests">Closed Requests</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/CareReceiver">Care Receiver/Passenger</NavLink>
              </Nav.Link>
            </Nav>
            <Nav variant="pills" className="ml-auto">
              <Nav.Link>Sign Out</Nav.Link>
            </Nav>
          </HashRouter>
        </Navbar.Collapse>
        <div>
          <Route exact path="/" component={NewRequest} />
          <Route path="/OpenRequests" component={OpenRequests} />
          <Route path="/ClosedRequests" component={ClosedRequests} />
          <Route path="/CareReceiver" component={CareReceiver} />
        </div>
      </Navbar>
    );
  }
}

export default NavigationBar;
