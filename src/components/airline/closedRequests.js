import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import jwtDecode from "jwt-decode";

import { fetchRequestForAirline } from "../../axios/apiCalls";

class ClosedRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      requests: [],
      errors: ""
    };
    this.decode = this.decode.bind(this);
    this.fetchClosedRequest = this.fetchClosedRequest.bind(this);
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
          code: decodedToken.code
        },
        function() {
          this.fetchClosedRequest();
        }
      );
    }
  }

  fetchClosedRequest() {
    const request = {
      code: this.state.code,
      closed: "true"
    };
    fetchRequestForAirline(request)
      .then(res => {
        if (res.data.success) {
          this.setState({ requests: res.data.request });
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
          <i>Closed Requests Page</i>
        </h4>
        {this.state.requests.length > 0 ? (
          this.state.requests.map((request, index) => (
            <Card className="my-3" key={index}>
              <Card.Header className="text-center">
                <b>Request ID:</b> {request.id}
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <b>Requested For:</b> {request.requestedFor}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Phone Number:</b> {"+" + request.phoneNumber}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Disability:</b> {request.disability}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Ticket No:</b> {request.ticketNumber}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <b>Travel Date:</b> {request.travelDate}
                  </ListGroup.Item>
                </ListGroup>
                <br />
                <Card.Text>
                  <b>Status:</b> {request.closed ? "Closed" : "Not Closed"}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted text-center">
                <b>Raised On:</b>{" "}
                {request.date.slice(8, 10) +
                  "-" +
                  request.date.slice(5, 7) +
                  "-" +
                  request.date.slice(0, 4)}{" "}
              </Card.Footer>
            </Card>
          ))
        ) : (
          <Card className="my-3">
            <Card.Header className="text-center">
              No requests closed
            </Card.Header>
          </Card>
        )}
      </div>
    );
  }
}

export default ClosedRequests;
