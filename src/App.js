import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import TravelAgent from "./components/travelAgent/dashboard";
import Home from "./components/home/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/TravelAgent/Dashboard" component={TravelAgent} />
        <Route path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
