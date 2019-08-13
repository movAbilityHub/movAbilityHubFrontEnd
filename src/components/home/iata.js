import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

class IATA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: true,
    };
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
  render() {
    return (
      <div>
      <h4 className="text-center"><i>This page is under development. Come back again later.</i></h4>
      <Card>
      <Card.Body>
      This page will display IATA information and recent success. Nothing for now!
      </Card.Body>
      </Card>
      </div>
    );
  }
}

export default IATA;
