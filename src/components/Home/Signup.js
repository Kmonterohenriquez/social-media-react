import React from "react";
import "../../style/Home/Signup.sass";

const Signup = () => {
  return (
    <div className="Signup">
      <div className="logo">
        <img src="" alt="WorkSmart's logo" />
      </div>
      <h1>Track Time on WorkSmart</h1>
      <p className="phrase">Pay only for the Hours worked</p>
      <div className="bottom">
        <hr />
        <h1 className="signup-btn">sign up</h1>
        <p className="learn-more-btn">Learn More</p>
      </div>
    </div>
  );
};

export default Signup;
