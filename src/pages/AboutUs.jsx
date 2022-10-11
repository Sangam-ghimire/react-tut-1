import React from "react";

import "./Aboutus.css";
import Card from "../components/Card";

const AboutUs = () => {
  return (
    <div>
      <div id="Nirvani">
        <div id="imagegroup">
          <div id="firstimgcol">
            <div id="topl">
              <img src="top right.png" alt="error" />
            </div>
            <div id="buttonl">
              <img src="botton left.png" alt="error" />
            </div>
          </div>

          <div id="secondimgcol">
            <div id="topr">
              <img src="toprightt.png" alt="error" />
            </div>
            <div id="buttonr">
              <img src="bottonright.png" alt="error" />
            </div>
          </div>
        </div>
        <div id="thirdtextcol">
          <div id="title"> Nirvani Garden</div>
          <div id="desc">
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
            condimentum ac, vestibulum eu nisl.
          </div>
          <div id="buttons">
            <button id="button1">Find us</button>
            <button id="button2">Contact us</button>
          </div>
        </div>
      </div>

      <div id="team">
        <div id="heading">
          <span id="headingi">Meet our Team</span>
        </div>

        <div id="products">
          <Card
            imageurl="team1.png"
            heading=" Name"
            subheading="Sub heading"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
            colorbar="colorbar"
          />
          <Card
            imageurl="team2.png"
            heading=" Name"
            subheading="Sub heading"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
            colorbar="colorbar2"
          />
          <Card
            imageurl="team3.png"
            heading=" Plant"
            subheading="Sub heading"
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
            colorbar="colorbar3"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
