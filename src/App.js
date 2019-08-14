import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  HashRouter
} from "react-router-dom";

import IataM from "./components/home/iata";
import TravelM from "./components/home/travelAgency";
import TravelAgent from "./components/travelAgent/dashboard";
import Passenger from "./components/passenger/dashboard";
import Airline from "./components/airline/dashboard";
import AirlineM from "./components/home/airline";
import Airport from "./components/airport/dashboard";
import AirportM from "./components/home/airport";
import TravelAgency from "./components/travelAgency/dashboard";
import Home from "./components/home/home";
import NotFound from "./components/common/notFound";
import Login from "./components/login/login";
import Register from "./components/register/customerRegister";

class App extends Component {
  render() {
    return (
      <Router>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/IATA" component={IataM} />
            <Route exact path="/Airport" component={AirportM} />
            <Route exact path="/Airline" component={AirlineM} />
            <Route exact path="/TravelAgency" component={TravelM} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route path="/Passenger/Dashboard" component={Passenger} />
            <Route path="/TravelAgent/Dashboard" component={TravelAgent} />
            <Route exact path="/Airport/Dashboard" component={Airport} />
            <Route exact path="/Airline/Dashboard" component={Airline} />
            <Route
              exact
              path="/TravelAgency/Dashboard"
              component={TravelAgency}
            />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </Router>
    );
  }
}

export default App;
