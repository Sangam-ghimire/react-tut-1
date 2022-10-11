import React from "react";
import "../components/Card.css";

const Card = (props) => {
  return (
    <div>
      <div id="products">
        <div className="product">
          <img src={props.imageurl} alt="sirste" />
          <div id="plantte">{props.heading}</div>
          <div id="planttee">{props.subheading}</div>
          <div id="plantteee">{props.text}</div>
          <div id={props.colorbar}> </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
