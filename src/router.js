import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "./Views/Home";
import UserAuth from "./Views/UserAuth";
import Companies  from "./Views/Companies"
import Profile from './Views/Profile'

export default (
  <Switch>
    <Route component={Home} exact path="/dashboard" />
    <Route component={UserAuth} exact path="/" />
    <Route component={Companies} exact path="/companies"/>
    <Route component={Profile} exact path="/profile"/>
  </Switch>
);
