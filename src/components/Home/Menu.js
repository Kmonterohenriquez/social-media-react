import React from "react";
import '../../style/Home/Menu.sass'

const Menu = () => {
  return (
    <div className="Menu">
      <div className='options'>
          <p>Help Center</p>
          <p>About</p>
          <p>Privacy Policy</p>
          <p>Community Guidelines</p>
          <p>Cookies Policy</p>
          <p>Career</p>
          <p>Language</p>
      </div>
      <div className="bottom">
        <i className="fab fa-weebly logo"></i>
        <p><i className="far fa-copyright"></i>Copyright 2020</p>
      </div>
    </div>
  );
};

export default Menu;
