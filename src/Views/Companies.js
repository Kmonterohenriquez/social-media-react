import React from "react";
import "../style/Companies/Companies.sass";
import Company from "../components/Companies/Company";
import data from './data'

const Companies = () => {
  const companies = data;
  return (
    <div className="Companies">
      <div className="md-container">
        <h1 className="main-title">All Companies</h1>
        <hr />
        <div className="Companies-grid">
          {companies.map((companyInfo) => (
            <Company companyInfo={companyInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
