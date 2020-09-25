import React from "react";

const Company = ({ CompanyInfo }) => {
  //   const {
  const name = "KWMH";
  const logo = "https://kevinmontero.com/static/media/my_logo.e70af071.png";
  const founded = "Feb 04";

  // } = CompanyInfo;
  return (
    <div className="Company">
      <div className="Company-info">
        <img src={logo} alt="name" />
        <h1>{name}</h1>
        <p>Establish {founded}</p>
        <div className='btn-container'>
          <button className="follow-btn">Follow</button>
          <button className="msg-btn">
            <i className="fas fa-envelope"></i>
          </button>
        </div>
      </div>
      <hr/>
      <p className="View-profile">View Profile</p>
    </div>
  );
};

export default Company;
