import React, { useState } from "react";
import "../../style/UserAuth/Signup.sass";
import "../../style/UserAuth/Login.sass";
import Axios from "axios";

const Signup = ({ changeHandler }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = () => {
    Axios.post("/api/register", {
      username,
      email,
      password,
      firstName,
      lastName,
    })
      .then((res) => {
        console.log(res);
        changeHandler();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="Login">
      <h1 className="Login-title">Sign up</h1>
      <div className="input-box">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-box">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-box">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
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
