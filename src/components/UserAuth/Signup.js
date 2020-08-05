import React from "react";

import "../../style/UserAuth/Signup.sass";
import "../../style/UserAuth/Login.sass";

const Signup = () => {
  return (
    <div className="Login">
      <h1 className="Login-title">Sign up</h1>
      <div className="input-box">
        <i className="fas fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      <div className="input-box">
        <i className="fas fa-envelope"></i>
        <input type="text" placeholder="Email" />
      </div>
      <div className="input-box">
        <i className="fas fa-unlock-alt"></i>
        <input type="text" placeholder="Password" />
      </div>

      <button className="primary-btn ">Register</button>
      <div className="bottom">
        <h1>Signup via social account</h1>
        <div className="social-media">
          <i className="fab fa-facebook fb"></i>
          <i className="fab fa-google google"></i>
          <i className="fab fa-twitter twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Signup;
