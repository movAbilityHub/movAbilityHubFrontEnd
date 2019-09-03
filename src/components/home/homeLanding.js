import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/home.css";

import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Search from "../../assets/images/play.png";
import IATAWhite from "../../assets/images/logoBig.png";

class HomeLanding extends Component {
  render() {
    return (
      <div className="bgimage">
        <div className="vh-100 text-center mt-5">
          <h1 className="display-3">How can we move you?</h1>
          <div id="inputs">
            <Form>
              <Row id="mainDropdowns">
                <Form.Group
                  as={Row}
                  className="mr-5 col-10 App col-xs-10 col-sm-12 col-md-6 col-lg-4"
                >
                  <Form.Label id="txtBegin">Begin</Form.Label>
                  <Form.Control as="select" type="text"></Form.Control>
                </Form.Group>
                <Form.Group
                  as={Row}
                  className="mr-5 col-10 col-xs-10 col-sm-12 col-md-6 col-lg-4"
                >
                  <Form.Label id="txtEnd">End</Form.Label>
                  <Form.Control as="select" type="text"></Form.Control>
                </Form.Group>
              </Row>
              <Button id="searchIcon">
                <img src={Search} alt="Search" width="20%" height="20%"></img>
              </Button>
            </Form>
          </div>
          <div id="WhiteLogo">
            <img src={IATAWhite} alt="logo"></img>
          </div>
        </div>
        <Row className="m-5">
          <CardDeck className="cardDeck">
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Our Mission</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our mission is to help passengers who are and will be
                  travelling via air and need assistance due to age, visible or
                  invisible disabilities. Be it a point-to-point flight or
                  transit flights or even around the world, we have got your
                  back. With our partner Airlines and Airports, you can now make
                  your trip a satisfying and stress-free experience.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>Invisible disabilities?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Invisible disabilities are those that cannot be recognized by
                  our eyes. Airports and Airlines provide services to passengers
                  with invisible disabilities.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>What is movAbility?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partner Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <CardDeck className="cardDeck">
            <Card className="shadow-lg rounded" id="card">
              <Card.Header>What Services are you provided?</Card.Header>
              <Card.Body>
                <Card.Text>
                  Our partner Airports and Airlines will have different services
                  provided. They will however follow a set of guidelines set by
                  IATA. Airlines and Airports have the liberty to add more or
                  remove services depending on the need at any point in time.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Row>
      </div>
    );
  }
}

export default HomeLanding;
