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
          <h6>Origin: {data.origin}</h6>
          <h6>Destination: {data.destination}</h6>
          <h6>Airline: {data.airline}</h6>
          <h6>Date of travel: {data.travelDate}</h6>
          <h6>Disability: {data.disability}</h6>
          <h6>Service Required: {data.service}</h6>
          <h6>
            Closed by departure airport:{" "}
            {data.closedByDepartureAirport ? "Yes" : "No"}
          </h6>
          <h6>
            Closed by destination airport:{" "}
            {data.closedByDestinationAirport ? "Yes" : "No"}
          </h6>
          <h6>Closed by airline: {data.closedByAirline ? "Yes" : "No"}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewModal;
