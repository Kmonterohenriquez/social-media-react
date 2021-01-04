import React from "react";
import "./style/App.sass";
import "./style/css-framework.sass"

// ROUTES
import routes from "./router";

// COMPONENTS
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav"
import Footer from "./components/Footer";
import Chat from "./Views/Chat";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "./redux/actions/getCurrUser";
import { withRouter } from "react-router-dom";

function App(props) {
  let currLocation = props.location.pathname;
  // const user = props.currUser.user.email;
  // React.useEffect(() => {
  //   if (user === "No user logged in") {
  //     props.history.push("/");
  //   }
  // }, [routes]);
  console.log(props.history)
  return (
    <>
      {currLocation !== "/" ? (
        <>
          <Nav />{" "}
          <div className="Chat-container">
            <Chat />
          </div>
        </>
      ) : null}
      {routes}
      <div className="MobileNav-container">
        <MobileNav/>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  currUser: state.getCurrUser,
});

export default withRouter(connect(mapStateToProps, { getCurrUser })(App));
