import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";

class ClosedRequests extends Component {
  render() {
    return (
      <div>
      <h4 className="text-center"><i>Closed Requests Page</i></h4>
      <CardDeck>
      <Card>
        <Card.Header className="text-center">
          RequestID No: {/*ID props added here?*/}
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Name: </ListGroup.Item>
            <ListGroup.Item>Disability: </ListGroup.Item>
            <ListGroup.Item>Ticket No: </ListGroup.Item>
            <ListGroup.Item>Departure Airport: </ListGroup.Item>
          </ListGroup>
          <br />
          <Card.Text>Status:Closed</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Timestamp comes here!
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header className="text-center">
          RequestID No: {/*ID props added here?*/}
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>Name: </ListGroup.Item>
            <ListGroup.Item>Disability: </ListGroup.Item>
            <ListGroup.Item>Ticket No: </ListGroup.Item>
            <ListGroup.Item>Departure Airport: </ListGroup.Item>
          </ListGroup>
          <br />
          <Card.Text>Status:Closed</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Timestamp comes here!
        </Card.Footer>
      </Card>
      </CardDeck>
      </div>
    );
  }
}

export default ClosedRequests;
