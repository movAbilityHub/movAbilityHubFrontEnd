import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";

class ClosedRequests extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 className="text-center">
          <i>Closed Requests Page</i>
        </h4>

        <CardDeck>
          <Card>
            <Card.Header className="text-center">
              RequestID No: {/*ID props added here?*/}
            </Card.Header>
            <Card.Body>
              <Card.Text>
              <h5>Name: </h5>
              <h5>Disability: </h5>
              <h5>Date: </h5>
              <h5>Ticket No: </h5>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
          <Card.Header className="text-center">
          RequestID No: {/*ID props added here?*/}
        </Card.Header>
        <Card.Body>
          <Card.Text>
          <h5>Name: </h5>
          <h5>Disability: </h5>
          <h5>Date: </h5>
          <h5>Ticket No: </h5>
          </Card.Text>
        </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default ClosedRequests;