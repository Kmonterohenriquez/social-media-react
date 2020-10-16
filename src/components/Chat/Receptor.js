import React from "react";
import me from "../../img/user_pic.jpg";
import '../../style/Chat/Chat.sass'

const Receptor = () => {
  return (
    <div className="Chat-rooms">
      <img src={me} alt="" />
      <div className="receptor">
        <p className="receptor-name">Kevin Montero</p>
        <p className="last-msg">You: Hola, como estas?</p>
      </div>
    </div>
  );
};

export default Receptor;
