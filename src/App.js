import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TravelAgent from "./components/travelAgent/dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/TravelAgent/Dashobard" component={TravelAgent} />
      </Router>
    );
  }
}

export default App;
