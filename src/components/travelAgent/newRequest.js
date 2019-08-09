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

  this.state = {
    time: 0
  
  };
}

handleTimeChange(time) {
  console.log(time);     // <- prints "3600" if "01:00" is picked
  this.setState({ time });
}
  
  render() {
    return (
       
      <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridDisability">
      <Form.Label>Disability</Form.Label>
      <Form.Control type="text" placeholder="Enter Disability" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="number" placeholder="Enter Age" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassportNo">
    <Form.Label>PassportNo</Form.Label>
    <Form.Control placeholder="Enter Passport No." />
  </Form.Group>
    </Form.Row>

  <Form.Row>
  <Form.Group as={Col}controlId="formGridFlightNo">
    <Form.Label>FlightNo</Form.Label>
    <Form.Control placeholder="Enter Flight No." />
  </Form.Group>

  <Form.Group as={Col}controlId="formGridDate">
  <Form.Label>TravelDate</Form.Label>
  <Form.Control placeholder="Enter Date" type="date" />
  </Form.Group>

  <Form.Group as={Col}controlId="formGridTime">
  <Form.Label>TravelTime</Form.Label>
  <TimePicker start="00:00" end="24:00" step={10} onChange={this.handleTimeChange} value={this.state.time}/>
  </Form.Group>
  </Form.Row>
  <Form.Row>
  

    <Form.Group as={Col} controlId="formGridInitialLocation">
      <Form.Label>StartAirport</Form.Label>
      <Form.Control as="select">
         <option>Choose...</option>
         <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridFinalLocation">
      <Form.Label>StopAirport</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridRenderer">
    <Form.Label>Do you have a transit flight?</Form.Label><br></br>
    {['radio'].map(type => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} value="np2p" name="radio" onClick={this.RadioClicked}/>
        <Form.Check inline label="No" type={type} id={`inline-${type}-2`} value="p2p" name="radio" onClick={this.RadioClicked}/>
        </div>
        ))}
    </Form.Group>
  </Form.Row>

  <Button className="newRequestBtn" type="submit">
    Submit
  </Button>
</Form>
    );
  }
}

export default NewRequests;
