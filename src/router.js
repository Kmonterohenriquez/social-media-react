import React from "react";
import { Switch, Route } from "react-router-dom";

// PAGES
import Home from "./Views/Home";
import UserAuth from "./Views/UserAuth";
import Profile from './Views/Profile'
import MyNetwork from './Views/MyNetwork'

export default (
  <Switch>
    <Route component={Home} exact path="/dashboard" />
    <Route component={UserAuth} exact path="/" />
    <Route component={Profile} exact path="/profile"/>
    <Route component={MyNetwork} exact path="/my-network" />
  </Switch>
);
