import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import ViewModal from "./modal";
import "../../assets/styles/aaOpenRequests.css";

class VerifyRegistrationTravelAgent extends Component {
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
          <i>Pending Travel Agent Verification</i>
        </h4>
        <br></br>
        <CardDeck>
        <Card>
        <Card.Header>Name: {/* props for ID*/}</Card.Header>
        <Card.Body>
          Code: {/* props for Disability here*/}
          <br />
          <hr />
          <Button className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" variant="primary" onClick={()=>this.setState({modalShow:true})}>
            Info
          </Button>
          <ViewModal
              show={this.state.modalShow}
              onHide={modalClose}
              />
          <Button className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" variant="success">
            Accept
          </Button>
          <Button className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" variant="danger">
            Deny
          </Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Name: {/* props for ID*/}</Card.Header>
        <Card.Body>
          Code: {/* props for Disability here*/}
          <br />
          <hr />
          <Button className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" id="firstbtn" variant="primary" onClick={()=>this.setState({modalShow:true})}>
            Info
          </Button>
          <ViewModal
              show={this.state.modalShow}
              onHide={modalClose}
              />
          <Button className="col-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" variant="success">
            Accept
          </Button>
          <Button className="bcol-8 col-xs-8 col-sm-8 col-md-4 col-lg-3 m-1" variant="danger">
            Deny
          </Button>
        </Card.Body>
      </Card>
        </CardDeck>
      </div>
    );
  }
}

export default VerifyRegistrationTravelAgent;
