import React, { useState } from "react";
//STYLE
import "../style/UserAuth/UserAuth.sass";

// COMPONENTS
import Login from "../components/UserAuth/Login";
import Signup from "../components/UserAuth/Signup";

const UserAuth = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="UserAuth">
      <div className="container">
        <div className="UserAuth-container container">
          <div className="left-side">
            {/* <h1 className='welcome-title'>Welcome to Workwise</h1> */}
            <h1 className="logo">
              <i className="fab fa-weebly"></i> WorkSmart
            </h1>
            <p className="description">
              WorkSmart, is a global freelancing platform and social networking
              where businesses and independent professionals connect and
              collaborate remotely.
            </p>
          </div>

          <div className="right-side">
            <div className="top">
              <button
                className={`${active ? "" : "active"} + "login-btn btn"`}
                onClick={() => setActive(false)}
              >
                Log in
              </button>
              <button
                className={`${active ? "active " : " "} + " signup-btn btn"`}
                onClick={() => setActive(true)}
              >
                Sign up
              </button>
            </div>
            {active === false ? <Login /> : <Signup />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuth;
