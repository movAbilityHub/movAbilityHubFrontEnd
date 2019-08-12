import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-number-input";

import "../../assets/styles/taDashboard.css";

class AddTravelAgents extends Component {
  constructor(props) {
    super(props);

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.RadioClicked = this.RadioClicked.bind(this);

    this.state = {
      time: 0,
      radio: ""
    };
  }

  handleTimeChange(time) {
    console.log(time); // <- prints "3600" if "01:00" is picked
    this.setState({ time });
  }

  RadioClicked(e) {
    console.log("here");
    this.setState({ [e.target.name]: e.target.value }, function() {
      console.log(this.state.radio);
    });
  }

  render() {
    return (
      <Form.Row>
        <h2 className="text-center col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
          <i>Add a new Travel Agent</i>
        </h2>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Agent's First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Enter First Name"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Agent's Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Agent's Phone Number</Form.Label>
          <PhoneInput
            placeholder="Enter phone number"
            value={this.state.phone}
            onChange={phone => this.setState({ phone })}
          />
        </Form.Group>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Agent's Email ID</Form.Label>
          <Form.Control
            type="Email"
            name="email"
            placeholder="Enter Email ID"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Temporary Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            name="password"
            type="password"
          />
        </Form.Group>

        <Form.Group
          as={Col}
          className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
        >
          <Form.Label>Re-Enter Temporary Password</Form.Label>
          <Form.Control
            placeholder="Enter Password"
            name="password2"
            type="password"
          />
        </Form.Group>

        <Button type="submit" className="w-25 mt-4 mx-auto">
          Submit
        </Button>
      </Form.Row>
    );
  }
}

export default AddTravelAgents;
