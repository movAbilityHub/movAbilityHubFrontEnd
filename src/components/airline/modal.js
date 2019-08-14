import React, {Component} from "react";
import {Modal, Button, Row, Col} from "react-bootstrap";

export class ViewModal extends Component{
constructor(props){
    super(props);

}
    render(){
     return(
        <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            RequestID: {/*props */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h5>Name: </h5>
        <h5>Ticket No:</h5>
        <h5>Date of travel:</h5>
        <br></br>
        <p> Discription:</p>
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