import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import NavBar from "../home/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/login.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import PhoneInput from "react-phone-number-input";

class Register extends Component {
  constructor() {
    super();
    document.title = "Registration";
    this.state = {
      email: "",
      password: "",
      password1: "",
      userType: "customer",
      errors: "",
      airlineCode: "",
      airlineName: "",
      airportCode: "",
      airportName: "",
      agencyName: "",
      agencyCode: "",
      iataCode: "",
      iataName: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ondropdownChange = this.ondropdownChange.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }, function() {
      console.log();
    });
  }

  ondropdownChange(e) {
    this.setState({ userType: e.target.value }, function() {
      console.log(this.state.userType);
    });
  }

  onSubmit(e) {
    this.setState({ errors: "" });
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1
    };

    const staff = {
      email: this.state.email,
      password: this.state.password,
      password1: this.state.password1,
      userType: this.state.userType
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <Col className="col-xs-10 col-sm-10 col-md-6 m-5 mx-auto text-dark">
          <Form noValidate onSubmit={this.onSubmit} className="mx-3">
            <h1 className="h3 md-3 font-weight-normal">Please Register</h1>
            <br />
            <Form.Group as={Col}>
              <Form.Label>User Type</Form.Label>
              <Form.Control
                as="select"
                name="userType"
                type="text"
                value={this.state.userType}
                onChange={this.ondropdownChange}
              >
                <option value="customer">Caregiver/Passenger</option>
                <option value="airline">Airline</option>
                <option value="airport">Airport</option>
                <option value="travelAgency">Travel Agency</option>
                <option value="iataStaff">IATA Staff</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                placeholder="Enter email"
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <label htmlFor="password">Password</label>
              <FormControl
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.onChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label htmlFor="password1">Re-Enter Password</label>
              <FormControl
                id="password1"
                type="password"
                name="password"
                value={this.state.password1}
                placeholder="Enter password"
                onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <label htmlFor="password">Phone No.</label>
              <PhoneInput
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
              />
            </Form.Group>

            {this.state.userType === "airline" ? (
              <div>
                <Form.Group as={Col}>
                  <label htmlFor="codeairline">Airline Code</label>
                  <FormControl
                    id="codeairline"
                    type="text"
                    name="codeairline"
                    value={this.state.airlineCode}
                    placeholder="Enter Airline Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairline">Airline Name</label>
                  <FormControl
                    id="nameairline"
                    type="text"
                    name="nameairline"
                    value={this.state.airlineName}
                    placeholder="Enter Airline Name"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </div>
            ) : this.state.userType === "airport" ? (
              <div>
                <Form.Group as={Col}>
                  <label htmlFor="codeairport">Airport Code</label>
                  <FormControl
                    id="codeairport"
                    type="text"
                    name="codeairport"
                    value={this.state.airportCode}
                    placeholder="Enter Airport Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairport">Airport Name</label>
                  <FormControl
                    id="nameairport"
                    type="text"
                    name="nameairport"
                    value={this.state.airportName}
                    placeholder="Enter Airport Name"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </div>
            ) : this.state.userType === "travelAgency" ? (
              <div>
                <Form.Group as={Col}>
                  <label htmlFor="codeagency">Agency Code</label>
                  <FormControl
                    id="codeagency"
                    type="text"
                    name="codeagency"
                    value={this.state.agencyCode}
                    placeholder="Enter Agency Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairport">Agency Name</label>
                  <FormControl
                    id="nameagency"
                    type="text"
                    name="nameagency"
                    value={this.state.agencyName}
                    placeholder="Enter Agency Name"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </div>
            ) : this.state.userType === "iataStaff" ? (
              <div>
                <Form.Group as={Col}>
                  <label htmlFor="codeStaff">IATA Staff Code</label>
                  <FormControl
                    id="codeStaff"
                    type="text"
                    name="codeStaff"
                    value={this.state.iataCode}
                    placeholder="Enter Agency Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameStaff">Staff Name</label>
                  <FormControl
                    id="nameStaff"
                    type="text"
                    name="nameStaff"
                    value={this.state.iataName}
                    placeholder="Enter IATA staff Name"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </div>
            ) : null}
            <Form.Group as={Col}>
              <Button variant="outline-primary" size="lg" type="submit" block>
                Register
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Register;
