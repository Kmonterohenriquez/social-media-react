import React from "react";
import me from "../../img/user_pic.jpg";
import "../../style/Profile/HeaderProfile.sass";
import cover from '../../img/cover.jpg'

const HeaderProfile = ({ handleMenu, currUser }) => {
  // const { firstName, lastName } = currUser

  // ------------  Dummy data ------------//
  const userInfo = {
    firstname: "Kevin",
    lastName: 'Montero',
    currJob: "React Developer",
    company: "American Express",
    connections: 3987,
    location: {
      city: 'Davenport',
      state: 'Florida',
      country: "United States"
    }
  };
  // ---------------------------------------

  const { firstname, lastName, currJob, company, location, connections } = userInfo
  const { city, state, country } = location
  
  return (
    <div className="HeaderProfile grey-border mg-b-4 white-bg rounded-2">
      <div className="cover">
        <img src={cover} alt=""/>
      </div>
     <div className="user-info-container">
        <div className="profile-image-container">
          <img src={me} alt="" />
        </div>
        <div className='user-info'>
          <h1 className="b-sm-font mg-tb-1">{firstname} {lastName}</h1>
          <p className="mg-b-1">{currJob} at {company}</p>
          <p>{city}, {state}, {country} - <span className='connections'>{connections} connections</span></p>
        </div>
     </div>
    </div>
  );
};

export default HeaderProfile;
