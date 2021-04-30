import React, { Component } from 'react';
//Pages
import Homepage from "./Pages/home";
import Beers from "./Pages/beers";
import Learn from "./Pages/learn";
import Forums from "./Pages/forums";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/home" component = { Homepage } />
          <Route exact path = "/beers" component = { Beers } />
          <Route exact path = "/learn" component = { Learn } />
          <Route exact path = "/forums" component = { Forums } />
        </Switch>
      </Router>
    );
  }
}

export default App;
