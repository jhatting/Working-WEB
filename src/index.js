import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LargeBox from "views/ProfilePage/LargeBox.js";
import MediumBox from "views/ProfilePage/MediumBox.js";
import SmallBox from "views/ProfilePage/SmallBox.js";
import ProfilePage3 from "views/ProfilePage/ProfilePage3.js";
import ProfilePage4 from "views/ProfilePage/ProfilePage4.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/large-box" component={LargeBox} />
      <Route path="/medium-box" component={MediumBox} />
      <Route path="/small-box" component={SmallBox} />
      <Route path="/kindling-box" component={ProfilePage3} />
      <Route path="/collection-orders" component={ProfilePage4} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
