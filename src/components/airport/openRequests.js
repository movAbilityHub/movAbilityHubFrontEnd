import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

class OpenRequests extends Component {
  render() {
    return (
      <div className="vh-100">
        <CardDeck>
          <Card className="card" style={{ width: "40%" }}>
            <Card.Header className="text-center">
              RequestID No: {/*ID props added here?*/}
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Name: </ListGroup.Item>
                <ListGroup.Item>Disability: </ListGroup.Item>
              </ListGroup>
              <br />
              <Button className="button" variant="primary">
                View More
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              Timestamp comes here!
            </Card.Footer>
            <Card.Footer className="text-muted text-center">
              Status: Pending
            </Card.Footer>
          </Card>
          <Card className="card" style={{ width: "60%" }}>
            <Card.Header className="text-center">
              RequestID No: {/*ID props added here?*/}
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>Name: </ListGroup.Item>
                <ListGroup.Item>Disability: </ListGroup.Item>
              </ListGroup>
              <br />
              <Button className="button" variant="primary">
                View More
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted text-center">
              Timestamp comes here!
            </Card.Footer>
            <Card.Footer className="text-muted text-center">
              Status: Pending
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default OpenRequests;
