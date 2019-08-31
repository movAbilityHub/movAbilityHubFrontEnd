import React, { Component } from "react";
import NavBar from "../home/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/login.css";

import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import PhoneInput from "react-phone-number-input";

import { customerRegister } from "../../axios/apiCalls";
import { staffRegister } from "../../axios/apiCalls";

class Register extends Component {
  constructor() {
    super();
    document.title = "Registration";
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password1: "",
      userType: "customer",
      show: false,
      errors: null,
      code: "",
      organisationName: "",
      phone: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ondropdownChange = this.ondropdownChange.bind(this);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  ondropdownChange(e) {
    this.setState({ userType: e.target.value });
  }

  onSubmit(e) {
    this.setState({ errors: null });
    e.preventDefault();

    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password1: this.state.password1
    };

    const staff = {
      organisationName: this.state.organisationName,
      code: this.state.code,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      password1: this.state.password1,
      userType: this.state.userType
    };
    if (this.state.userType === "customer") {
      customerRegister(user)
        .then(res => {
          if (res.data.success) {
            this.props.history.push("/Login");
          } else {
            this.setState({ errors: res.data, show: true });
          }
        })
        .catch(e => {
          this.setState({
            errors:
              e && e.response ? e.response.data.error : { error: "Something went wrong!" },
            show: true
          });
        });
    } else {
      staffRegister(staff)
        .then(res => {
          if (res.data.success) {
            this.props.history.push("/Login");
          } else {
            this.setState({ errors: res.data, show: true });
          }
        })
        .catch(e => {
          this.setState({
            errors:
              e && e.response ? e.response.data.error : { error: "Something went wrong!" },
            show: true
          });
        });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.show ? (
          <Alert
            id="alert"
            className="m-3"
            variant="danger"
            onClose={() => this.setState({ show: false })}
            dismissible
          >
            {this.state.errors
              ? Object.values(this.state.errors).map((error, index) => (
                  <h6 key={index}>{error}</h6>
                ))
              : null}
          </Alert>
        ) : null}
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
              </Form.Control>
            </Form.Group>
            {this.state.userType === "customer" ? (
              <div>
                <Form.Group as={Col}>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    value={this.state.firstName}
                    placeholder="Enter first name"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="lastName">Last Name</label>
                  <FormControl
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    placeholder="Enter last name"
                    onChange={this.onChange}
                  />
                </Form.Group>
              </div>
            ) : null}
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
                name="password1"
                value={this.state.password1}
                placeholder="Re-enter password"
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
                    name="code"
                    value={this.state.code}
                    placeholder="Enter Airline Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairline">Airline Name</label>
                  <FormControl
                    id="nameairline"
                    type="text"
                    name="organisationName"
                    value={this.state.organisationName}
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
                    name="code"
                    value={this.state.code}
                    placeholder="Enter Airport Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairport">Airport Name</label>
                  <FormControl
                    id="nameairport"
                    type="text"
                    name="organisationName"
                    value={this.state.organisationName}
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
                    name="code"
                    value={this.state.code}
                    placeholder="Enter Agency Code"
                    onChange={this.onChange}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <label htmlFor="nameairport">Agency Name</label>
                  <FormControl
                    id="nameagency"
                    type="text"
                    name="organisationName"
                    value={this.state.organisationName}
                    placeholder="Enter Agency Name"
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
