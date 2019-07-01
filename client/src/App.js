import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Navbar from "./components/layout/Navbar";
import NavbarAdmin from "./components/layout/NavbarAdmin";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Employee from "./components/pages/Employee";
import Customers from "./components/pages/Customers";
import Calls from "./components/pages/Calls";
import Services from './components/pages/Services';
import Reqby from './components/pages/Reqby';

import EmployeeState from "./context/employee/EmployeeState";
import "./App.css";

const App = () => {
  return (
    <EmployeeState>
      <Router>
        <Fragment>
          
          <NavbarAdmin />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/customers" component={Customers} />
              <Route exact path="/employee" component={Employee} />
              <Route exact path="/calls" component={Calls} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/reqby" component={Reqby} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </EmployeeState>
  );
};

export default App;
