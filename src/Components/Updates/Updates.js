import React from "react";
import "./Updates.scss";
import InstagramEmbed from "react-instagram-embed";
const Updates = () => {
  return (
    <div className="Updates" id="Updates">
      Updates
      <InstagramEmbed
        url="https://www.instagram.com/ticktockjj//"
        maxWidth={950}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  );
};

export default Updates;
