import React, { Component } from "react";
import jwtDecode from "jwt-decode";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/login.css";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import { customerLogin } from "../../axios/apiCalls";
import { otherStaffLogin } from "../../axios/apiCalls";
import { iataStaffLogin } from "../../axios/apiCalls";
import { travelAgentLogin } from "../../axios/apiCalls";

class Login extends Component {
  constructor() {
    super();
    document.title = "Login";
    this.state = {
      email: "",
      password: "",
      userType: "customer",
      errors: "",
      rememberMe: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.onCheckBoxToggle = this.onCheckBoxToggle.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value }, function() {
      console.log(this.state.rememberMe);
    });
  }

  onCheckBoxToggle(e) {
    this.setState({ [e.target.name]: !!e.target.checked }, function() {
      console.log(this.state.rememberMe);
    });
  }

  togglePassword() {
    const togglePassword = document.getElementById("togglePassword");
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
      togglePassword.innerHTML = "Hide";
    } else {
      password.type = "password";
      togglePassword.innerHTML = "Show";
    }
  }

  onSubmit(e) {
    this.setState({ errors: "" });
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const staff = {
      email: this.state.email,
      password: this.state.password,
      userType: this.state.userType
    };

    if (this.state.userType === "customer") {
      customerLogin(user)
        .then(res => {
          if (res.status === 200) {
            if (this.state.rememberMe === true) {
              localStorage.setItem("session", JSON.stringify(res.data.token));
            } else {
              sessionStorage.setItem("session", JSON.stringify(res.data.token));
            }
            this.props.history.push("/Dashboard");
          } else {
            this.setState({ errors: "Something went wrong!" });
          }
        })
        .catch(e => {
          this.setState(
            {
              errors:
                e && e.response ? e.response.data : "Something went wrong!"
            },
            function() {
              console.log(this.state);
            }
          );
        });
    } else if (
      this.state.userType === "airport" ||
      this.state.userType === "airline" ||
      this.state.userType === "traveAgency"
    ) {
      otherStaffLogin(staff)
        .then(res => {
          if (res.status === 200) {
            if (this.state.rememberMe === true) {
              localStorage.setItem("session", JSON.stringify(res.data.token));
            } else {
              sessionStorage.setItem("session", JSON.stringify(res.data.token));
            }
            const decodedToken = jwtDecode(res.data.token);
            const userType = decodedToken.userType;
            if (userType === "airport") {
              this.props.history.push("/Airport/Dashboard");
            } else if (userType === "airline") {
              this.props.history.push("/Airline/Dashboard");
            } else if (userType === "travelAgency") {
              this.props.history.push("/TravelAgency/Dashboard");
            }
          } else {
            this.setState({ errors: "Something went wrong!" });
          }
        })
        .catch(e => {
          this.setState(
            {
              errors:
                e && e.response ? e.response.data : "Something went wrong!"
            },
            function() {
              console.log(this.state);
            }
          );
        });
    } else if (this.state.userType === "travelAgent") {
      travelAgentLogin(user)
        .then(res => {
          if (res.status === 200) {
            if (this.state.rememberMe === true) {
              localStorage.setItem("session", JSON.stringify(res.data.token));
            } else {
              sessionStorage.setItem("session", JSON.stringify(res.data.token));
            }
            this.props.history.push("/TravelAgent/Dashboard");
          } else {
            this.setState({ errors: "Something went wrong!" });
          }
        })
        .catch(e => {
          this.setState(
            {
              errors:
                e && e.response ? e.response.data : "Something went wrong!"
            },
            function() {
              console.log(this.state);
            }
          );
        });
    } else if (this.state.userType === "iataStaff") {
      iataStaffLogin(user)
        .then(res => {
          if (res.status === 200) {
            if (this.state.rememberMe === true) {
              localStorage.setItem("session", JSON.stringify(res.data.token));
            } else {
              sessionStorage.setItem("session", JSON.stringify(res.data.token));
            }
            this.props.history.push("/IATA/Dashboard");
          } else {
            this.setState({ errors: "Something went wrong!" });
          }
        })
        .catch(e => {
          this.setState(
            {
              errors:
                e && e.response ? e.response.data : "Something went wrong!"
            },
            function() {
              console.log(this.state);
            }
          );
        });
    }
  }

  render() {
    return (
      <Col className="col-xs-10 col-sm-10 col-md-6 m-5 mx-auto text-dark">
        <Form noValidate onSubmit={this.onSubmit} className="mx-3 formCenter">
          <h1 className="h3 md-3 font-weight-normal">Please Sign In</h1>
          <br />
          <Form.Group as={Col}>
            <Form.Label>User Type</Form.Label>
            <Form.Control
              as="select"
              name="userType"
              type="text"
              value={this.state.userType}
              onChange={this.onChange}
            >
              <option value="customer">Caregiver/Passenger</option>
              <option value="airline">Airline</option>
              <option value="airport">Airport</option>
              <option value="travelAgency">Travel Agency</option>
              <option value="travelAgent">Travel Agent</option>
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
            <InputGroup>
              <FormControl
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.onChange}
              />
              <InputGroup.Append>
                <Button
                  variant="outline-primary"
                  id="togglePassword"
                  onClick={this.togglePassword}
                >
                  Show
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Check
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              onChange={this.onCheckBoxToggle}
              label="Remember me"
              checked={this.state.rememberMe}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Button variant="outline-primary" size="lg" type="submit" block>
              Sign in
            </Button>
          </Form.Group>
        </Form>
      </Col>
    );
  }
}

export default Login;
