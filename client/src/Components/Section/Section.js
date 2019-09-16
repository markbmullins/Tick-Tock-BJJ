import React from "react";
import "./Section.scss";

const Section = (props) => {
  return (
    <div className="Section" id="Section">
        {props.children}
    </div>
  );
};

export default Section;
