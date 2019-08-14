import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "../../assets/styles/aaOpenRequests.css";


class OpenRequests extends Component {
  render() {
    return (
      <div className="vh-100">
        <h4 className="text-center">
          <i>Open Requests Page</i>
        </h4>
        <CardDeck>
          <Card>
          <Card.Header>
          RequestID: {/* props for ID*/}
          </Card.Header>
           <Card.Body> 
           Disability: {/* props for Disability here*/}
           <br></br><hr/>
           <Button className="btnViewMore" variant="primary">
           View More
         </Button>
         <Button className="btnAccept" variant="success">
           Accept
         </Button>
         <Button className="btnDeny" variant="warning">
           Deny
         </Button>
         </Card.Body>
          </Card>
          <Card>
          <Card.Header>
          RequestID: {/* props for ID*/}
          </Card.Header>
           <Card.Body> 
           Disability: {/* props for Disability here*/}
           <br></br><hr/>
           <Button className="btnViewMore py-1" variant="primary">
           View More
         </Button>
         <Button className="btnAccept py-1" variant="success">
           Accept
         </Button>
         <Button className="btnDeny py-1" variant="warning">
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
