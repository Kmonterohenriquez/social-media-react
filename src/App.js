import React from "react";
import "./style/App.sass";
// ROUTES
import routes from "./router"

// COMPONENTS
import Nav from "./components/Nav";
import Footer from "./components/Footer"

import {withRouter} from "react-router-dom"

function App(props) {
  let currLocation = props.location.pathname;
  return (
    <div className="App">
      {currLocation !== '/user-auth'? <Nav />: null}
      {routes}
      <Footer/>
    </div>
  );
}

export default withRouter(App);
