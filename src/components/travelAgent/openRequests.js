import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "../../assets/styles/tapaOpenRequests.css";

import jwtDecode from "jwt-decode";

import { viewOpenRequest } from "../../axios/apiCalls";
import { cancelRequest } from "../../axios/apiCalls";

class OpenRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requesterID: "",
      openRequests: "",
      errors: "",
      success: ""
    };
    this.decode = this.decode.bind(this);
    this.fetchOpenRequest = this.fetchOpenRequest.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this);
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
          this.setState({
            errors: res.data
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.err : "Something went wrong!"
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
            e && e.response ? e.response.data.err : "Something went wrong!"
        });
      });
  }

  render() {
    return (
      <div>
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
                    <b>Travel Date:</b> {request.travelDate}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Flight Time:</b>{" "}
                    {request.travelTime.toString().slice(0, 2) +
                      ":" +
                      request.travelTime.toString().slice(2, 4)}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Response By Airport:</b>{" "}
                    {request.airportResponse === "true"
                      ? "Approved"
                      : request.airportResponse === "false"
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
