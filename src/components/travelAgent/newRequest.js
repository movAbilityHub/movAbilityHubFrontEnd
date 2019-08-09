import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import TimePicker from 'react-bootstrap-time-picker';

import "../../assets/styles/taDashboard.css";

class NewRequests extends Component {
  constructor(props) {
    super(props);

  this.handleTimeChange = this.handleTimeChange.bind(this);
  this.RadioClicked=this.RadioClicked.bind(this);

  this.state = {
    time: 0,
    radio:""
  };
}

handleTimeChange(time) {
  console.log(time);     // <- prints "3600" if "01:00" is picked
  this.setState({ time });
}

RadioClicked(e){
  console.log("here");
  this.setState({ [e.target.name]: e.target.value}, function() {
    console.log(this.state.radio);
  });
}
  
  render() {
    return (
       
      <Form>
  <Form.Row>
    <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridDisability">
      <Form.Label>Disability</Form.Label>
      <Form.Control type="text" placeholder="Enter Disability" />
    </Form.Group>

    <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter Age" />
    </Form.Group>

    <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridPassportNo">
    <Form.Label>Passport No.</Form.Label>
    <Form.Control placeholder="Enter Passport No." />
  </Form.Group>

  <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridFlightNo">
    <Form.Label>Flight No.</Form.Label>
    <Form.Control placeholder="Enter Flight No." />
  </Form.Group>

  <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridDate">
  <Form.Label>Travel Date</Form.Label>
  <Form.Control placeholder="Enter Date" type="date" />
  </Form.Group>

  <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridTime">
  <Form.Label>Travel Time</Form.Label>
  <TimePicker start="00:00" end="24:00" step={10} onChange={this.handleTimeChange} value={this.state.time}/>
  </Form.Group>
  
    <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridInitialLocation">
      <Form.Label>Start Airport</Form.Label>
      <Form.Control as="select">
         <option>Choose...</option>
         <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridFinalLocation">
      <Form.Label>Stop Airport</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridRenderer">
    <Form.Label>Do you have a transit flight?</Form.Label><br></br>
      <div key={`inline-radio`} className="mb-3">
        <Form.Check inline label="Yes" type="radio" id={`inline-radio-1`} value="np2p" name="radio" onChange={this.RadioClicked}/>
        <Form.Check inline label="No" type="radio" id={`inline-radio-2`} value="p2p" name="radio" onChange={this.RadioClicked}/>
      </div>
    </Form.Group>
  </Form.Row>

{this.state.radio ==="np2p" ?
<Form.Row>
<Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridVia1">
  <Form.Label>Via</Form.Label>
  <Form.Control as="select">
     <option>Choose...</option>
     <option>...</option>
  </Form.Control>
</Form.Group>
<Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridVia2">
  <Form.Label>Via</Form.Label>
  <Form.Control as="select">
     <option>Choose...</option>
     <option>...</option>
  </Form.Control>
</Form.Group>
<Form.Group as={Col} className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4" controlId="formGridVia3">
  <Form.Label>Via</Form.Label>
  <Form.Control as="select">
     <option>Choose...</option>
     <option>...</option>
  </Form.Control>
</Form.Group>
</Form.Row>
:null}

  <Button className="newRequestBtn" type="submit">
    Submit
  </Button>
</Form>
    );
  }
}

export default NewRequests;
