import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/home.css";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

import Search from "../../assets/images/play.png";
import IATAWhite from "../../assets/images/logoBig.png";

import { checkDestination } from "../../axios/apiCalls";
import { checkDeparture } from "../../axios/apiCalls";

import jwtDecode from "jwt-decode";

const internationalAirports = require("../../assets/data/internationalAirports.json");

class HomeLanding extends Component {
  constructor() {
    super();
    this.state = {
      destination: "",
      departure: "",
      status1: false,
      status2: false,
      message1: null,
      message2: null
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    this.setState({
      status1: false,
      status2: false,
      message1: null,
      message2: null
    });

    const destination = {
      destination: this.state.destination
    };

    const departure = {
      departure: this.state.departure
    };

    checkDeparture(departure)
      .then(res => {
        if (res.data.success) {
          this.setState({ status1: res.data.success }, function() {
            this.redirect();
          });
        } else {
          this.setState({ message1: res.data.errors }, function() {
            console.log(this.state);
          });
        }
      })
      .catch(e => {
        this.setState({
          errors: "Something went wrong!"
        });
      });

    checkDestination(destination)
      .then(res => {
        if (res.data.success) {
          this.setState({ status2: res.data.success }, function() {
            this.redirect();
          });
        } else {
          this.setState({ message2: res.data.errors }, function() {
            console.log(this.state);
          });
        }
      })
      .catch(e => {
        this.setState({
          errors: "Something went wrong!"
        });
      });
  }

  redirect() {
    if (this.state.status1 && this.state.status2) {
      let token = null;
      if (localStorage.getItem("session")) {
        token = JSON.parse(localStorage.getItem("session"));
      } else if (sessionStorage.getItem("session")) {
        token = JSON.parse(sessionStorage.getItem("session"));
      }
      if (token !== null) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.userType === "customer") {
          this.props.history.push("/Passenger/Dashboard");
        }
      } else {
        this.props.history.push("/Login");
      }
    }
  }

  render() {
    return (
      <div className="bgimage">
        <div className="vh-100 text-center mt-5">
          <h1 className="display-3">How can we move you?</h1>
          <div id="inputs" className="">
            <Row id="mainDropdowns">
              <Form.Group
                as={Row}
                className="col-10 col-xs-10 col-sm-9 col-md-9 col-lg-4 mx-auto"
              >
                <Form.Label id="txtBegin">Begin</Form.Label>
                <Form.Control
                  as="select"
                  type="text"
                  id="dropdown"
                  name="departure"
                  value={this.state.departure}
                  onChange={this.onChange}
                >
                  <option value={null} key={0}>
                    Select Departure
                  </option>
                  {internationalAirports.length > 0
                    ? internationalAirports.map((airport, index) => (
                        <option value={airport.iataCode} key={index + 1}>
                          {airport.city}, {airport.country}
                        </option>
                      ))
                    : null}
                </Form.Control>
              </Form.Group>
              <Form.Group
                as={Row}
                className="col-10 col-xs-10 col-sm-9 col-md-9 col-lg-4 mx-auto"
              >
                <Form.Label id="txtEnd">End</Form.Label>
                <Form.Control
                  as="select"
                  type="text"
                  id="dropdown"
                  name="destination"
                  value={this.state.destination}
                  onChange={this.onChange}
                >
                  <option value={null} key={0}>
                    Select Destination
                  </option>
                  {internationalAirports.length > 0
                    ? internationalAirports.map((airport, index) => (
                        <option value={airport.iataCode} key={index + 1}>
                          {airport.city}, {airport.country}
                        </option>
                      ))
                    : null}
                </Form.Control>
              </Form.Group>
            </Row>
            <img
              src={Search}
              id="searchIcon"
              alt="Search"
              width="10%"
              height="10%"
              className="searchIconZoom col-6 col-xs-6 col-sm-6 col-md-4 col-lg-2 mx-auto"
              onClick={this.onSubmit}
            ></img>
          </div>
          <div className="text-white">
            {this.state.message1 === null ? null : this.state.message1}
          </div>
          <div className="text-white">
            {this.state.message2 === null ? null : this.state.message2}
          </div>
          <div className="text-white">
            {this.state.errors === null ? null : this.state.errors}
          </div>
          <div id="WhiteLogo">
            <a
              href="https://www.iata.org/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={IATAWhite} alt="logo" className="iataLogo"></img>
            </a>
          </div>
        </div>
        <Row className="m-5">
          <h1 className="display-3 mb-4" id="secondHeader">
            Our Beliefs
          </h1>
          <CardDeck className="cardDeck">
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Our Mission</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our mission is to help passengers who are and will be
                  travelling via air and need assistance due to age, visible or
                  invisible disabilities. Be it a point-to-point flight or
                  transit flights or even around the world, we have got your
                  back. With our partner Airlines and Airports, you can now make
                  your trip a satisfying and stress-free experience.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Invisible disabilities?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Invisible disabilities are those that cannot be recognized by
                  our eyes. Airports and Airlines provide services to passengers
                  with invisible disabilities.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>What is movAbility?</Card.Header>
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
      </div>
    );
  }
}

export default HomeLanding;
