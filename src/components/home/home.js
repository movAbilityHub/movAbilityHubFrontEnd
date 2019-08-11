import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import "../../assets/styles/home.css";
import pic1 from "../../assets/images/iata1.jpg";
import pic2 from "../../assets/images/iata2.jpg";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
=======
import "../../assets/styles/navbar.css";
import "../../assets/styles/taDashboard.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
>>>>>>> 13d110cc576ae13cdaed6a0f6be3206d91caf8b7

import Iata from "./iata";
import Airline from "./airline";
import Airport from "./airport";
import TravelAgency from "./travelAgency";
import HomeLanding from "./homeLanding";
import Login from "../login/login";
import Register from "../register/customerRegister";

class Home extends Component {
  render() {
    return (
      <div className="vh-100">
<<<<<<< HEAD
        <Navbar />
        <Carousel className="sliders">
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={pic2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>We are movAbility</h3>
            <p>And we help those who need it.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>We are aviation lovers</h3>
            <p>And we help you fly hassle free.</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

        <Row className="m-5">
          <CardDeck className="cardDeck">
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Our Mission</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our mission is to help passengers who are and will be
                  travelling via Air and have invisible disabilities. Be it a
                  point-to-point flight or transit flights or even around the
                  world, we have got your back. With our Partner Airlines and
                  Airports, you can now travel hassle free.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Invisible disabilities?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Invisible disabilities are those that cannot be recognized by
                  our eyes. Airports and Airlines provide services to passengers
                  with invisible disabilities. Disabilities like Epilepsy, AIDS,
                  Cystic Fibrosis, Traumatic Brain Injury and Psychiatric
                  Disabilities are just some examples we look out for.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>What is movAbility?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partnet Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className="cardDeck">
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>What Services are you provided?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partner Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
=======
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
        <div>
          <Switch>
            <Route exact path="/" component={HomeLanding} />
            <Route path="/IATA" component={Iata} />
            <Route path="/Airport" component={Airport} />
            <Route path="/Airline" component={Airline} />
            <Route path="/TravelAgency" component={TravelAgency} />
            <Route path="/Login" component={Login} />{" "}
            <Route path="/Register" component={Register} />
          </Switch>
        </div>
>>>>>>> 13d110cc576ae13cdaed6a0f6be3206d91caf8b7
      </div>
    );
  }
}

export default Home;
