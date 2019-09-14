import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "../../assets/styles/tapaOpenRequests.css";

import jwtDecode from "jwt-decode";

import { viewOpenRequest } from "../../axios/apiCalls";
import { cancelRequest } from "../../axios/apiCalls";

import Alert from "react-bootstrap/Alert";

class OpenRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requesterID: "",
      openRequests: "",
      show: false,
      errors: null,
      success: null
    };
    this.decode = this.decode.bind(this);
    this.fetchOpenRequest = this.fetchOpenRequest.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
  }

  async componentDidMount() {
    this.decode();
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
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
      this.setState(
        {
          requesterID: decodedToken.id
        },
        function() {
          this.fetchOpenRequest();
        }
      );
    }
  }

  deleteRequest(e) {
    this.setState({ errors: null, success: null });
    const request = {
      id: e.target.value
    };
    cancelRequest(request)
      .then(res => {
        if (res.data.success) {
          this.setState({ success: res.data.response }, function() {
            this.fetchOpenRequest();
          });
        } else {
          this.setState({ errors: res.data.errors, show: true });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response
              ? e.response.data.err
              : { error: { error: "Something went wrong!" } }
        });
      });
  }

  fetchOpenRequest() {
    const request = {
      requesterID: this.state.requesterID
    };
    viewOpenRequest(request)
      .then(res => {
        if (res.data.success) {
          this.setState({ openRequests: res.data.request });
        } else {
          this.setState({
            errors: res.data
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response
              ? e.response.data.err
              : { error: { error: "Something went wrong!" } }
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.show ? (
          <Alert
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
        {this.state.success !== null ? (
          <Alert
            className="m-3"
            variant="success"
            onClose={() => this.setState({ success: null })}
            dismissible
          >
            {this.state.success
              ? Object.values(this.state.success).map((message, index) => (
                  <h6 key={index}>{message}</h6>
                ))
              : null}
          </Alert>
        ) : null}
        <h4 className="text-center">
          <i>Open Requests Page</i>
        </h4>
        {this.state.openRequests.length > 0 ? (
          this.state.openRequests.map((request, index) => (
            <Card className="my-3" key={index}>
              <Card.Header className="text-center">
                <b>Request ID No:</b> {request.id}
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <b>Requested For:</b> {request.requestedFor}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Disability:</b> {request.disability}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Ticket No:</b> {request.ticketNumber}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Departure Airport:</b> {request.origin}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Destination Airport:</b> {request.destination}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Airline:</b> {request.airline}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Travel Date:</b> {request.travelDate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Response By Departure Airport:</b>{" "}
                    {request.departureAirportResponse === "true"
                      ? "Approved"
                      : request.departureAirportResponse === "false"
                      ? "Denied"
                      : "No Action"}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Response By Destination Airport:</b>{" "}
                    {request.destinationAirportResponse === "true"
                      ? "Approved"
                      : request.destinationAirportResponse === "false"
                      ? "Denied"
                      : "No Action"}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Response By Airline:</b>{" "}
                    {request.airlineResponse === "true"
                      ? "Approved"
                      : request.airlineResponse === "false"
                      ? "Denied"
                      : "No Action"}
                  </ListGroup.Item>
                </ListGroup>
                <br />
                <Card.Text>
                  <b>Services needed:</b> {request.service}
                </Card.Text>
                <Card.Text>
                  <b>Status:</b>{" "}
                  {request.status === true ? "Open" : "Denied by both parties"}
                </Card.Text>
                <Button
                  className="button-center"
                  variant="primary"
                  value={request._id}
                  onClick={this.deleteRequest}
                >
                  Cancel Request
                </Button>
                <Button
                  className="button-center ml-2"
                  variant="warning"
                  value={request._id}
                  onClick={this.closeRequest}
                >
                  Close Request
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                <b>Raised On:</b>{" "}
                {request.date.slice(8, 10) +
                  "-" +
                  request.date.slice(5, 7) +
                  "-" +
                  request.date.slice(0, 4)}
              </Card.Footer>
            </Card>
          ))
        ) : (
          <Card className="my-3">
            <Card.Header className="text-center">
              No requests raised
            </Card.Header>
          </Card>
        )}
      </div>
    );
  }
}

export default OpenRequests;
