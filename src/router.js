import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "./Views/Home";
import UserAuth from "./Views/UserAuth";

export default (
  <Switch>
    <Route component={Home} exact path="/dashboard" />
    <Route component={UserAuth} exact path="/" />
  </Switch>
);
