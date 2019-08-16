import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-number-input";

import "../../assets/styles/taDashboard.css";

import jwtDecode from "jwt-decode";
import { travelAgentRegister } from "../../axios/apiCalls";

class AddTravelAgents extends Component {
  constructor() {
    super();

    this.decode = this.decode.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      code: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      success: ""
    };
  }

  async componentDidMount() {
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
        code: decodedToken.code
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: "" });
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password2: this.state.password2,
      code: this.state.code
    };
    travelAgentRegister(user)
      .then(res => {
        if (res.data.success) {
          this.setState({ success: res.data.message });
        } else {
          this.setState({ errors: res.data });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.error : "Something went wrong!"
        });
      });
  }

  render() {
    return (
      <Form noValidate onSubmit={this.onSubmit}>
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
              value={this.state.firstName}
              onChange={this.onChange}
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
              value={this.state.lastName}
              onChange={this.onChange}
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
              value={this.state.email}
              onChange={this.onChange}
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
              value={this.state.password}
              onChange={this.onChange}
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
              value={this.state.password2}
              onChange={this.onChange}
              type="password"
            />
          </Form.Group>

          <Button
            type="submit"
            className="w-25 mt-4 mx-auto"
            onSubmit={this.onSubmit}
          >
            Submit
          </Button>
        </Form.Row>
      </Form>
    );
  }
}

export default AddTravelAgents;
