import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class OpenRequests extends Component {
  state = {};
  render() {
    return (
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
          <Card.Text>Services needed come here!</Card.Text>
          <Button className="button-center" variant="primary">
            Cancel Request
          </Button>
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
          <Card.Text>Services needed come here!</Card.Text>
          <Button className="button-center" variant="primary">
            Cancel Request
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          Timestamp comes here!
        </Card.Footer>
      </Card>
      </CardDeck>
    );
  }
}

export default OpenRequests;
