import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class ViewModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Code: {/*props */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Name: </h5>
          <h5>Email ID:</h5>
          <h5>Phone Number:</h5>
          <br />
          <p />
          <p>{/* add here */}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewModal;
