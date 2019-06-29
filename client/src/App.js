import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Employee from "./components/pages/Employee";
import Customers from "./components/pages/Customers";

import EmployeeState from "./context/employee/EmployeeState";
import "./App.css";

const App = () => {
  return (
    <EmployeeState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/customers" component={Customers} />
              <Route exact path="/employee" component={Employee} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </EmployeeState>
  );
};

export default App;
