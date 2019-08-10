import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TravelAgent from "./components/travelAgent/dashboard";
import Passenger from "./components/passenger/dashboard";
import Home from "./components/home/home";
import Iata from "./components/home/iata";
import Airport from "./components/home/airline";
import Airline from "./components/home/airport";
import TravelAgency from "./components/home/travelAgency";
import LogIn from "./components/login/login";
import SignUp from "./components/register/customerRegister";
import NotFound from "./components/common/notFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Passenger/Dashboard" component={Passenger}/>
          <Route path="/TravelAgent/Dashboard" component={TravelAgent} />
          <Route path="/IATA" component={Iata} />
          <Route path="/Airport" component={Airport} />
          <Route path="/Airline" component={Airline} />
          <Route path="/TravelAgency" component={TravelAgency} />
          <Route path="/Login" component={LogIn} />
          <Route path="/Signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
