import React from "react";
import "./Contactus.css";
import Card from "../components/Card";

const ContactUs = () => {
  return (
    <div>
      <div id="contactdetails">
        <div id="first">
          <div id="firsta"> Let's connect</div>
          <div id="firstb">Our Contact Details</div>
        </div>
        <div id="second">
          <div id="seconda">
            <div id="secondai">Telephone</div>
            <div id="secondaii">00000000</div>
          </div>
          <div id="secondb">
            <div id="secondbi">Whatsapp</div>
            <div id="secondbii">000000000</div>
          </div>
        </div>
        <div id="third">
          <div id="thirda">
            <div id="thirdai">our Garden</div>
            <div id="thirdaii">Lorem, ipsum dolor.</div>
          </div>
          <div id="thirdb">
            <div id="thirdbi">Email</div>
            <div id="thirdbii">info@email.com</div>
          </div>
        </div>
      </div>
      <div id="socialmedia">
        <div id="heading">
          <span id="headingi">Social </span>
          media
        </div>
        <div id="products">
          <div className="product">
            <Card
              imageurl="./insta.png"
              heading="Instagram"
              subheading="lorem.5"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            dolorum."
              colorbar="colorbar"
            />
          </div>
          <div className="product">
            <Card
              imageurl="./Facebook.png"
              heading="Facebook"
              subheading="lorem.5"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            dolorum."
              colorbar="colorbar2"
            />
          </div>
          <div className="product">
            <Card
              imageurl="./Whatsapp.png"
              heading="Whatsapp"
              subheading="lorem.5"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            dolorum."
              colorbar="colorbar3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
