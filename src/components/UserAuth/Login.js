import React, { useState } from "react";
import "../../style/UserAuth/Login.sass"; // Style
import { withRouter } from "react-router-dom";
import Axios from "axios";

// REDUX
import { connect } from "react-redux";
import getCurrUser from "../../redux/actions/getCurrUser";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const handleLogin = async (e, guest) => {
    let newEmail, newPassword;
    e.preventDefault();
    if (guest) {
      newEmail = "guest@example.com";
      newPassword = "1234";
    } else {
      newEmail = email;
      newPassword = password;
    }

    Axios.post("/api/login", { email: newEmail, password: newPassword })
      .then(async (res) => {
        await props.getCurrUser(email);
        setResponse(res.data.message); // This is just for testing -- Remove it when the Web app is done --
        props.history.push("/dashboard");
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
        <div className="input-box mt-lg">
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
          onClick={(e) => handleLogin(e, false)}
        >
          Login
        </button>
        <button
          className="secondary-btn btn"
          onClick={(e) => handleLogin(e, true)}
        >
          Guest
        </button>
        <a href="/">Forget Password?</a>
        <p className="error">{response}</p>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  getCurrUser: state.getCurrUser,
});
export default withRouter(connect(mapStateToProps, { getCurrUser })(Login));
