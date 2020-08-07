import React, { useState } from "react";
import "../../style/UserAuth/Login.sass";
import { withRouter } from "react-router-dom";

import Axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = (e) => {
    console.log("email", email, " password ", password);

    e.preventDefault();
    Axios.post("/api/login", { email, password })
      .then((res) => {
        props.history.push("/");
        setResponse(res.data.message);
        console.log("Logged", res);
      })
      .catch((err) => {
        setResponse(err.response.data.message);
        console.log(err.response);
      });
  };
  return (
    <div className="Login">
      <h1 className="Login-title">Log In</h1>
      <form>
        <div className="input-box">
          <i className="fas fa-user"></i>
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
        <button
          type="submit"
          className="primary-btn"
          onClick={(e) => handleLogin(e)}
        >
          Login
        </button>{" "}
        <a href="/">Forget Password?</a>
        <p className="error">{response}</p>
      </form>
      <div className="bottom">
        <h1>Login via social account</h1>
        <div className="social-media">
          <i className="fab fa-facebook fb"></i>
          <i className="fab fa-google google"></i>
          <i className="fab fa-twitter twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
