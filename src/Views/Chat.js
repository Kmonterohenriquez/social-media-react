import React from "react";
import me from "../img/user_pic.jpg";
import "../style/Chat/Chat.sass";
import Receptor from "../components/Chat/Receptor.js";

const Chat = () => {
  const [chatToggle, setChatToggle] = React.useState(false);
  return (
    <div className={chatToggle ? `open Chat` : `close Chat`}>
      <div className="Chat-header">
        <div className="left-side">
          <img className="user-img" src={me} alt="" />
          <p className="messaging">Messaging</p>
        </div>
        <div className="right-side">
          <i className="fas fa-edit"></i>
          <i
            onClick={() => setChatToggle(!chatToggle)}
            className={chatToggle?"fas fa-chevron-down": "fas fa-chevron-up"}
          ></i>
        </div>
      </div>
      <hr />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
      <Receptor />
    </div>
  );
};

export default Chat;
