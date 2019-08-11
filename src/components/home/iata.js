import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";


import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/styles/navbar.css";

import Navbar from "./navbar";

class IATA extends Component {
  constructor(props) {
    super(props);

  this.state = {
    modalOpen: true,
  };
}

toggleModal(){
 this.setState({modalOpen: !this.state.modalOpen});
}
  render() {
    return (
      <div>
        <Navbar />
        <Container>
        <Modal isOpen={this.state.toggleModal}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Page Information</ModalHeader>
        <ModalBody>This page consists details of IATA as an organisation and the role it plays in the aviation industry.</ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={this.toggleModal}>Close</Button>
        </ModalFooter>
        </Modal>
        </Container>
      </div>
    );
  }
}


export default IATA;
