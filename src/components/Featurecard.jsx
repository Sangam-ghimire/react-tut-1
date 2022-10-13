import React from "react";
import "../components/Featurecard.css";

const Featurecard = (props) => {
  return (
    <div>
      <div className="fcard">
        <div id={props.discountribbon}>{props.distext}</div>
        <div id="fimgntext">
          <div id="ffimage">
            <img src={props.imageurl} alt="imagelily" />
          </div>
          <div id={props.carddetails}>
            <div id="ffname">{props.nameplant}</div>
            <div id="fftype">{props.typeplant}</div>
          </div>
          <div id="pprice">
            {" "}
            <div> {props.prize}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featurecard;
