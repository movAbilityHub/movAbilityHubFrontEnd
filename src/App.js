import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TravelAgent from "./components/travelAgent/dashboard";
import Passenger from "./components/passenger/dashboard";
import Airline from "./components/airline/dashboard";
import Airport from "./components/airport/dashboard";
import Home from "./components/home/home";
import NotFound from "./components/common/notFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Passenger/Dashboard" component={Passenger} />
          <Route exact path="/TravelAgent/Dashboard" component={TravelAgent} />
          <Route exact path="/Airport/Dashboard" component={Airport} />
          <Route exact path="/Airline/Dashboard" component={Airline} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
