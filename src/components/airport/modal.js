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
          <Modal.Title>RequestID: {data.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Care Receiver's Name: {data.requestedFor}</h6>
          <h6>Phone Number: {"+" + data.phoneNumber}</h6>
          <h6>Ticket No: {data.ticketNumber}</h6>
          <h6>Passport No: {data.passportNumber}</h6>
          <h6>Date of travel: {data.travelDate}</h6>
          <h6>Disability: {data.disability}</h6>
          <h6>Service Required: {data.service}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewModal;
