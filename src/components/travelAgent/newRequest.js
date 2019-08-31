/* eslint-disable no-useless-concat */
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import TimePicker from "react-bootstrap-time-picker";
import { withRouter } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import jwtDecode from "jwt-decode";

import "../../assets/styles/taDashboard.css";

import { storeRequest } from "../../axios/apiCalls";
import { registeredAirports } from "../../axios/apiCalls";
import { registeredAirlines } from "../../axios/apiCalls";

class NewRequests extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAirlineChange = this.onAirlineChange.bind(this);
    this.onOriginChange = this.onOriginChange.bind(this);
    this.onDestinationChange = this.onDestinationChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.RadioClicked = this.RadioClicked.bind(this);
    this.fetchAirports = this.fetchAirports.bind(this);
    this.fetchAirlines = this.fetchAirlines.bind(this);
    this.onTransitDestinationChange = this.onTransitDestinationChange.bind(
      this
    );
    this.onTransitAirlineChange = this.onTransitAirlineChange.bind(this);
    this.decode = this.decode.bind(this);

    this.state = {
      passportNumber: "",
      ticketNumber: "",
      travelDate: "",
      flightNumber: "",
      origin: "",
      destination: "",
      requestedBy: "",
      requesterID: "",
      requestedFor: "",
      disability: "",
      age: "",
      service: "",
      phone: "",
      transitDestination: "",
      transitDestinationCode: "",
      transitAirline: "",
      transitAirlineCode: "",
      destinationCode: "",
      originCode: "",
      airline: "",
      airlineCode: "",
      time: 0,
      radio: "",
      registeredAirlines: [],
      registeredAirports: [],
      errors: "",
      success: ""
    };
  }

  async componentDidMount() {
    this.fetchAirports();
    this.fetchAirlines();
    this.decode();
  }

  decode() {
    let token;
    if (localStorage.getItem("session")) {
      token = JSON.parse(localStorage.getItem("session"));
    } else if (sessionStorage.getItem("session")) {
      token = JSON.parse(sessionStorage.getItem("session"));
    }
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      this.setState({
        requestedBy: decodedToken.firstName + " " + decodedToken.lastName,
        requesterID: decodedToken.id
      });
    }
  }

  onSubmit(e) {
    this.setState({ errors: "" });
    e.preventDefault();
    const request = {
      passportNumber: this.state.passportNumber,
      ticketNumber: this.state.ticketNumber,
      travelDate: this.state.travelDate,
      flightNumber: this.state.flightNumber,
      origin: this.state.origin,
      destination: this.state.destination,
      requestedBy: this.state.requestedBy,
      requesterID: this.state.requesterID,
      disability: this.state.disability,
      age: this.state.age,
      service: this.state.service,
      requestedFor: this.state.requestedFor,
      phoneNumber: this.state.phone,
      transitDestination: this.state.transitDestination,
      transitDestinationCode: this.state.transitDestinationCode,
      transitAirline: this.state.transitAirline,
      transitAirlineCode: this.state.transitAirlineCode,
      destinationCode: this.state.destinationCode,
      originCode: this.state.originCode,
      airline: this.state.airline,
      airlineCode: this.state.airlineCode,
      travelTime: this.state.time
    };
    console.log(request);
    storeRequest(request)
      .then(res => {
        if (res.status === 201) {
          this.setState({ success: res.data.message }, function() {
            console.log(this.state.success);
          });
        } else {
          this.setState({ errors: res.data }, function() {
            console.log(this.state.errors);
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.err : { error: "Something went wrong!" }
        });
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onAirlineChange(e) {
    const value = e.target.value.split("~");
    this.setState(
      {
        airline: value[1],
        airlineCode: value[0]
      },
      function() {
        console.log(this.state);
      }
    );
  }

  onOriginChange(e) {
    const value = e.target.value.split("~");
    this.setState({
      origin: value[1],
      originCode: value[0]
    });
  }

  onDestinationChange(e) {
    const value = e.target.value.split("~");
    this.setState({
      destination: value[1],
      destinationCode: value[0]
    });
  }

  onTransitDestinationChange(e) {
    const value = e.target.value.split("~");
    this.setState({
      transitDestination: value[1],
      transitDestinationCode: value[0]
    });
  }

  onTransitAirlineChange(e) {
    const value = e.target.value.split("~");
    this.setState({
      transitAirline: value[1],
      transitAirlineCode: value[0]
    });
  }

  fetchAirports() {
    registeredAirports()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            registeredAirports: res.data.airports
          });
        }
      })
      .catch(e => {
        this.setState({
          error: e.response.data.err
        });
      });
  }

  fetchAirlines() {
    registeredAirlines()
      .then(res => {
        if (res.status === 200) {
          this.setState({
            registeredAirlines: res.data.airlines
          });
        }
      })
      .catch(e => {
        this.setState({
          error: e.response.data.err
        });
      });
  }

  handleTimeChange(time) {
    this.setState({ time });
  }

  RadioClicked(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <h4 className="text-center">
          <i>New Request Page</i>
        </h4>
        <Form noValidate onSubmit={this.onSubmit}>
          <Form.Row>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridRequestedFor"
            >
              <Form.Label>Raising request for</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="requestedFor"
                value={this.state.requestedFor}
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridDisability"
            >
              <Form.Label>Disability</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Disability"
                name="disability"
                value={this.state.disability}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridAge"
            >
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                name="age"
                value={this.state.age}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridPassportNo"
            >
              <Form.Label>Passport No.</Form.Label>
              <Form.Control
                placeholder="Enter Passport No."
                name="passportNumber"
                value={this.state.passportNumber}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridFlightNo"
            >
              <Form.Label>Flight No.</Form.Label>
              <Form.Control
                placeholder="Enter Flight No."
                name="flightNumber"
                value={this.state.flightNumber}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridDate"
            >
              <Form.Label>Travel Date</Form.Label>
              <Form.Control
                placeholder="Enter Date"
                type="date"
                name="travelDate"
                value={this.state.travelDate}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridTime"
            >
              <Form.Label>Travel Time</Form.Label>
              <TimePicker
                start="00:00"
                end="24:00"
                step={10}
                onChange={this.handleTimeChange}
                value={this.state.time}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridTicketNo"
            >
              <Form.Label>Ticket No.</Form.Label>
              <Form.Control
                placeholder="Enter Ticket No."
                name="ticketNumber"
                value={this.state.ticketNumber}
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridAirlineName"
            >
              <Form.Label>Select Airline</Form.Label>
              <Form.Control
                as="select"
                type="text"
                onChange={this.onAirlineChange}
              >
                <option value={"" + "~" + ""} key={0}>
                  Select an airline
                </option>
                {this.state.registeredAirlines.length > 0
                  ? this.state.registeredAirlines.map((airline, index) => (
                      <option
                        value={airline.code + "~" + airline.organisationName}
                        key={index + 1}
                      >
                        {airline.organisationName}
                      </option>
                    ))
                  : null}
              </Form.Control>
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridCaretakerNo"
            >
              <Form.Label>Phone No.</Form.Label>
              <PhoneInput
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
              />
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridInitialLocation"
            >
              <Form.Label>Origin</Form.Label>
              <Form.Control
                as="select"
                type="text"
                onChange={this.onOriginChange}
              >
                <option value={"" + "~" + ""} key={0}>
                  Select origin airport
                </option>
                {this.state.registeredAirports.length > 0
                  ? this.state.registeredAirports.map((airport, index) => (
                      <option
                        value={airport.code + "~" + airport.organisationName}
                        key={index + 1}
                      >
                        {airport.organisationName}
                      </option>
                    ))
                  : null}
              </Form.Control>
            </Form.Group>

            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridFinalLocation"
            >
              <Form.Label>Destination</Form.Label>
              <Form.Control
                as="select"
                type="text"
                onChange={this.onDestinationChange}
              >
                <option value={"" + "~" + ""} key={0}>
                  Select destination airport
                </option>
                {this.state.registeredAirports.length > 0
                  ? this.state.registeredAirports.map((airport, index) => (
                      <option
                        value={airport.code + "~" + airport.organisationName}
                        key={index + 1}
                      >
                        {airport.organisationName}
                      </option>
                    ))
                  : null}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRenderer">
              <Form.Label>Do you have a transit flight?</Form.Label>
              <br />
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id={`inline-radio-1`}
                  value="1"
                  name="radio"
                  onChange={this.RadioClicked}
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id={`inline-radio-2`}
                  value="2"
                  name="radio"
                  onChange={this.RadioClicked}
                  defaultChecked
                />
              </div>
            </Form.Group>
          </Form.Row>

          {this.state.radio === "1" ? (
            <div>
              <Form.Row>
                <Form.Group
                  as={Col}
                  className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
                  controlId="formGridVia1"
                >
                  <Form.Label>Via</Form.Label>
                  <Form.Control
                    as="select"
                    type="text"
                    onChange={this.onTransitDestinationChange}
                  >
                    <option value={"" + "~" + ""} key={0}>
                      Select transit airport
                    </option>
                    {this.state.registeredAirports.length > 0
                      ? this.state.registeredAirports.map((airport, index) => (
                          <option
                            value={
                              airport.code + "~" + airport.organisationName
                            }
                            key={index + 1}
                          >
                            {airport.organisationName}
                          </option>
                        ))
                      : null}
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  as={Col}
                  className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
                  controlId="formGridAirline1"
                >
                  <Form.Label>Airline</Form.Label>
                  <Form.Control
                    as="select"
                    type="text"
                    onChange={this.onTransitAirlineChange}
                  >
                    <option value={"" + "~" + ""} key={0}>
                      Select transit airline
                    </option>
                    {this.state.registeredAirlines.length > 0
                      ? this.state.registeredAirlines.map((airline, index) => (
                          <option
                            value={
                              airline.code + "~" + airline.organisationName
                            }
                            key={index + 1}
                          >
                            {airline.organisationName}
                          </option>
                        ))
                      : null}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </div>
          ) : null}

          <Form.Group
            as={Row}
            className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-12"
            controlId="formGridDescription"
          >
            <Form.Label>Details of Service</Form.Label>
            <Form.Control
              placeholder="Enter Details of service"
              as="textarea"
              name="service"
              value={this.state.service}
              onChange={this.onChange}
            />
          </Form.Group>

          <Button
            className="newRequestBtn"
            type="submit"
            onSubmit={this.onSubmit}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(NewRequests);
