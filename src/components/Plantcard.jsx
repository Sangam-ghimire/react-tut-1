import React from "react";
import "./Plantcard.css";

const Plantcard = (props) => {
  return (
    <div>
      <div id="Indoor">
        <div id="image1">
          <img src={props.imageurl} alt="error" />
        </div>
        <div id="text1">
          <div id="majortext1">{props.majortext1}</div>
          <div id="minortext1">{props.minortext1}</div>
        </div>
      </div>
    </div>
  );
};

export default Plantcard;
