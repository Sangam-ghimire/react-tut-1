import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
// import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <div id="details"> </div>
      <div id="team" >
      <div id="socialmedia">
        <div id="heading">
          <span id="headingi">Meet our Team</span>
        </div>
        </div>
        <div id="products">
          <div className="product">
            <img src={team1} alt="sirste" />
            <div id="plantte">Name</div>
            <div id="planttee">Sub-heading</div>
            <div id="plantteee">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              dolorum.
            </div>
            <div id="colorbar3"> </div>
          </div>
          <div className="product">
            <img src={team2} alt="sirste" />
            <div id="plantte">Name</div>
            <div id="planttee">Sub-heading</div>
            <div id="plantteee">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              dolorum.
            </div>
            <div id="colorbar3"> </div>
          </div>
          <div className="product">
            <img src={team3} alt="sirste" />
            <div id="plantte">Name</div>
            <div id="planttee">Sub-heading</div>
            <div id="plantteee">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
              dolorum.
            </div>
            <div id="colorbar3"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
