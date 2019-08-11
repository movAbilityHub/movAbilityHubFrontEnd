import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TravelAgent from "./components/travelAgent/dashboard";
import Passenger from "./components/passenger/dashboard";
import Airline from "./components/airline/dashboard";
import Airport from "./components/airport/dashboard";
import Home from "./components/home/home";
import Iata from "./components/home/iata";
import AirportInfo from "./components/home/airline";
import AirlineInfo from "./components/home/airport";
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
          <Route path="/Airport/Dashboard" component={Airport}/>
          <Route path="/Airline/Dashboard" component={Airline}/>
          <Route path="/IATA" component={Iata} />
          <Route path="/Airport" component={AirportInfo} />
          <Route path="/Airline" component={AirlineInfo} />
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
