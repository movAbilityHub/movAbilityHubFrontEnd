import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ListGroup from "react-bootstrap/ListGroup";
import ViewModal from "./modal";

import "../../assets/styles/aaOpenRequests.css";

class OpenRequests extends Component {

  constructor(props){
    super(props);
    this.state={
      modalShow:false,
    }
  }

  render() {
    let modalClose=()=>this.setState({modalShow:false});

    return (
      <div className="vh-100">
        <h4 className="text-center">
          <i>Open Requests Page</i>
        </h4>
        <br></br>
        <CardDeck>
          <Card>
            <Card.Header>RequestID: {/* props for ID*/}</Card.Header>
            <Card.Body>
              Disability: {/* props for Disability here*/}
              <br />
              <hr />
              <Button className="btnViewMore" variant="primary" onClick={()=>this.setState({modalShow:true})}>
                View More
              </Button>
              <ViewModal
              show={this.state.modalShow}
              onHide={modalClose}
              />
              <Button className="btnAccept" variant="success">
                Accept
              </Button>
              <Button className="btnDeny" variant="danger">
                Deny
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>RequestID: {/* props for ID*/}</Card.Header>
            <Card.Body>
              Disability: {/* props for Disability here*/}
              <br />
              <hr />
              <Button className="btnViewMore py-1" variant="primary" onClick={()=>this.setState({modalShow:true})}>
                View More
              </Button>
              <ViewModal
              show={this.state.modalShow}
              onHide={modalClose}
              />
              <Button className="btnAccept py-1" variant="success">
                Accept
              </Button>
              <Button className="btnDeny py-1" variant="danger">
                Deny
              </Button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default OpenRequests;
