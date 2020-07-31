import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "./Views/Home";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
  </Switch>
);
