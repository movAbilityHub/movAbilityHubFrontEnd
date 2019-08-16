import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export class ViewModal extends Component {
  render() {
    const data = this.props.data;
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Organisation Code: {data.code}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <b>Name:</b> {data.organisationName}
          </h5>
          <h5>
            <b>Email ID:</b> {data.email}
          </h5>
          <h5>
            <b>Phone Number:</b> {"+" + data.phoneNumber}
          </h5>
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewModal;
