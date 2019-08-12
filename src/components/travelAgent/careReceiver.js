import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-number-input";

class CareReceiver extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>Update Details</h4>
        <Form>
          <Form.Row>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridOldPassword"
            >
              <Form.Label>Old Password</Form.Label>
              <Form.Control type="text" placeholder="Enter Old Password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridNewPassword"
            >
              <Form.Label>New Password</Form.Label>
              <Form.Control type="text" placeholder="Enter New Password" />
            </Form.Group>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridNew2Password"
            >
              <Form.Label>Re-Enter New Password</Form.Label>
              <Form.Control type="text" placeholder="Re-Enter New Password" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group
              as={Col}
              className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4"
              controlId="formGridNewPhoneNo"
            >
              <Form.Label>New Phone No.</Form.Label>
              <PhoneInput
                placeholder="Enter phone number"
                value={this.state.phone}
                onChange={phone => this.setState({ phone })}
              />
            </Form.Group>
          </Form.Row>
          <Button className="updateBtn" type="submit">
            {" "}
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

export default CareReceiver;
