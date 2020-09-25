import React, { useState } from "react";
import "../style/Companies/Companies.sass";
import Company from "../components/Companies/Company"

const Companies = () => {
  const [companies, setCompanies] = useState([{
      name: "KWMH",
      logo: "https://kevinmontero.com/static/media/my_logo.e70af071.png",
      founded: "Feb 04"

  }]);
  return (
    <div className="Companies">
      <div className="md-container">
        <h1 className='main-title'>All Companies</h1>
        <hr/>
        <div className="companies-grid">
            {companies.map(companyInfo=> <Company companyInfo={companyInfo}/>)}
        </div>
      </div>
    </div>
  );
};

export default Companies;
