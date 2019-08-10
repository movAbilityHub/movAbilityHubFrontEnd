import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

class ClosedRequests extends Component {
  state = {};
  render() {
    return (
              <Card className="card" style={{ width: '60%' }}>
              <Card.Header className="text-center">RequestID No: {/*ID props added here?*/}</Card.Header>
              <Card.Body>
                <ListGroup>
                <ListGroup.Item>Name: </ListGroup.Item>
                <ListGroup.Item>Disability: </ListGroup.Item>
                <ListGroup.Item>Ticket No: </ListGroup.Item>
                <ListGroup.Item>Departure Airport: </ListGroup.Item>
                </ListGroup>
                <br></br>
                <Card.Text>
                  Status:Closed
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted text-center">Timestamp comes here!</Card.Footer>
            </Card>
      
    );

  }
}

export default ClosedRequests;
