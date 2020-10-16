import React, { useState } from "react";
import "../../style/UserAuth/Login.sass";
import Axios from "axios";

import user_placeholder from "../../img/user_placeholder.svg";

const Signup = ({ changeHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userPic, setUserPic] = useState(user_placeholder);

  const register = () => {
    Axios.post("/api/register", {
      email,
      password,
      fullName,
    })
      .then((res) => {
        console.log(res);
        changeHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <h1 className="Signup-title">Sign up</h1>
      <div className="user-pic-container">
        <img src={userPic} alt=""/>
      </div>
      <div className="input-box">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <i className="fas fa-envelope"></i>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-box">
        <i className="fas fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={() => register()}>
        Register
      </button>
    </div>
  );
};

export default Signup;
