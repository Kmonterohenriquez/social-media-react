import React from "react";
import "./style/App.sass";
// ROUTES
import routes from "./router"

// COMPONENTS
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
      <Footer/>
    </div>
  );
}

export default App;
