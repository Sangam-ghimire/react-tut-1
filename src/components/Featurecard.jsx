import React from 'react';
import "../components/Featurecard.css";

const Featurecard = (props) => {
    return (
        <div>
            <div className="fcard">
            <div id="discountribbon">{props.distext}</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={props.imageurl} alt="imagelily" />
              </div>
              <div id="ffname">{props.nameplant}</div>
              <div id="fftype">{props.typeplant}</div>
            </div>
          </div>
        </div>
    );
};

export default Featurecard;