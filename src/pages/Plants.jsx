import React from "react";
import "./Plants.css";
import Explorecards from "../components/Explorecards";
import Featurecard from "../components/Featurecard";

const Plants = () => {
  return (
    <div>
      <div id="explore">
        <h1>Explore Categories</h1>
        <div id="cards">
          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />

          <Explorecards title="All Plants" qtext="10 items" />
        </div>
      </div>
      <div id="displayrow" className="displayrow">
        <div id="rowheading">New Products</div>
        <div id="newproducts" className="newproducts">
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
            carddetails="carddetails"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
            carddetails="carddetails"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
            carddetails="carddetails"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
            carddetails="carddetails"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
            carddetails="carddetails"
          />
        </div>
      </div>
      <div id="displayrow">
        <div id="rowheading">Featured Products</div>
        <div id="newproducts">
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
        </div>
      </div>
      <div id="displayrow">
        <div id="rowheading">Popular Products</div>
        <div id="newproducts">
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="propsdiscountribbon"
            prize="RS.300"
          />
        </div>
      </div>
      <div id="marketingmsg">
        <div id="mheading">Heading</div>
        <div id="mmessage">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
          cum.
        </div>{" "}
      </div>
    </div>
  );
};

export default Plants;
