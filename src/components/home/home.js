import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/home.css";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navbar from "./navbar";

class Home extends Component {
  render() {
    return (
      <div className="min-vh-100">
        <Navbar />
        <Row className="m-5">
          <Col sm={4}>
            <Card className="card">
              <Card.Header>Our Mission</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our mission is to help passengers who are and will be
                  travelling via Air and have invisible disabilities. Be it a
                  point-to-point flight or transit flights or even around the
                  world, we have got your back. With our Partner Airlines and
                  Airports, you can now travel hassle free.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="card">
              <Card.Header>Invisible disabilities?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Invisible disabilities are those that cannot be recognized by
                  our eyes. Airports and Airlines provide services to passengers
                  with invisible disabilities. Disabilities like Epilepsy, AIDS,
                  Cystic Fibrosis, Traumatic Brain Injury and Psychiatric
                  Disabilities are just some examples we look out for.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="card">
              <Card.Header>What is movAbility?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partnet Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} />
          <Col sm={8}>
            <Card className="card">
              <Card.Header>What Services are you provided?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partnet Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={2} />
        </Row>
      </div>
    );
  }
}

export default Home;
