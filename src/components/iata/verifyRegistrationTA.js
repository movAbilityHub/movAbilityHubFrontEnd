import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ViewModal from "./modal";
import "../../assets/styles/aaOpenRequests.css";

import jwtDecode from "jwt-decode";

import { getAccountsForApproval } from "../../axios/apiCalls";
import { approveAccount } from "../../axios/apiCalls";
import { rejectAccount } from "../../axios/apiCalls";

class VerifyRegistrationTravelAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      accounts: [],
      success: "",
      errors: "",
      name: "",
      staffID: "",
      data: ""
    };
    this.decode = this.decode.bind(this);
    this.performApproval = this.performApproval.bind(this);
    this.performDenial = this.performDenial.bind(this);
    this.fetchAccounts = this.fetchAccounts.bind(this);
  }

  async componentDidMount() {
    this.decode();
  }

  decode() {
    let token;
    if (localStorage.getItem("session")) {
      token = JSON.parse(localStorage.getItem("session"));
    } else if (sessionStorage.getItem("session")) {
      token = JSON.parse(sessionStorage.getItem("session"));
    }
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      this.setState(
        {
          name: decodedToken.firstName + " " + decodedToken.lastName,
          staffID: decodedToken.staffID
        },
        function() {
          this.fetchAccounts();
        }
      );
    }
  }

  fetchAccounts() {
    getAccountsForApproval()
      .then(res => {
        if (res.data.success) {
          this.setState({ accounts: res.data.accounts });
        } else {
          this.setState({
            errors: res.data
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.err : { error: "Something went wrong!" }
        });
      });
  }

  performApproval(e) {
    const signature = {
      id: e.target.value,
      name: this.state.name,
      staffID: this.state.staffID
    };
    approveAccount(signature)
      .then(res => {
        if (res.data.success) {
          this.setState({ success: res.data.message }, function() {
            this.fetchAccounts();
          });
        } else {
          this.setState({
            errors: res.data
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.err : { error: "Something went wrong!" }
        });
      });
  }

  performDenial(e) {
    const signature = {
      id: e.target.value
    };
    rejectAccount(signature)
      .then(res => {
        if (res.data.success) {
          this.setState(
            {
              success: res.data.message
            },
            function() {
              this.fetchAccounts();
            }
          );
        } else {
          this.setState({
            errors: res.data
          });
        }
      })
      .catch(e => {
        this.setState({
          errors:
            e && e.response ? e.response.data.err : { error: "Something went wrong!" }
        });
      });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="vh-100">
        <h4 className="text-center">
          <i>Pending Account Verification</i>
        </h4>
        <br />
        {this.state.accounts.length > 0 ? (
          this.state.accounts.map((account, index) => (
            <Card className="my-3" key={index}>
              <Card.Header>
                <b>Name:</b> {account.organisationName}
              </Card.Header>
              <Card.Body>
                <h6>
                  <b>Organisation Type:</b>{" "}
                  {account.userType === "airline"
                    ? "Airline"
                    : account.userType === "airport"
                    ? "Airport"
                    : "Travel Agency"}
                </h6>
                <h6>
                  <b>Organisation Code:</b> {account.code}
                </h6>
                <br />
                <hr />
                <Button
                  className="col-8 col-xs-6 col-sm-7 col-md-3 col-lg-2 m-2"
                  variant="primary"
                  onClick={() =>
                    this.setState({ modalShow: true, data: account })
                  }
                >
                  Info
                </Button>
                <ViewModal
                  show={this.state.modalShow}
                  onHide={modalClose}
                  data={this.state.data}
                />
                <Button
                  className="col-8 col-xs-6 col-sm-7 col-md-3 col-lg-2 m-2"
                  variant="success"
                  value={account._id}
                  onClick={this.performApproval}
                >
                  Accept
                </Button>
                <Button
                  className="col-8 col-xs-6 col-sm-7 col-md-3 col-lg-2 m-2"
                  value={account._id}
                  variant="danger"
                  onClick={this.performDenial}
                >
                  Deny
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card className="my-3">
            <Card.Header className="text-center">
              No requests raised
            </Card.Header>
          </Card>
        )}
      </div>
    );
  }
}

export default VerifyRegistrationTravelAgent;
