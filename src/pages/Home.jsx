import React from "react";

import Plantcard from "../components/Plantcard";
import Card from "../components/Card";
import Featurecard from "../components/Featurecard";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <div id="plantsection">
        <Plantcard
          imageurl="Indoor.png"
          majortext1="Indoor Plant"
          minortext1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc"
        />
        <Plantcard
          imageurl="Outdoor.png"
          majortext1="Outdoor Plant"
          minortext1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc"
        />
        <Plantcard
          imageurl="Decoration.png"
          majortext1="Decoration Plant"
          minortext1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt facilisis nunc"
        />
      </div>
      <div id="featuredproducts">
        <div id="fheading"> Our featured product</div>
        <div id="fimage">
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="discountribbon"
          />
         <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="discountribbon"
          />
         <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="discountribbon"
          />
          <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="discountribbon"
          />
         <Featurecard
            distext="save 4%"
            imageurl="piecelily.png"
            nameplant="Piece lily"
            typeplant="Indoor Plant"
            discountribbon="discountribbon"
          />
        </div>
        {/* Completed by resizing card due to small screen size */}
        <div id="offerings">
          <div id="oHeading">
            <h1>Offerings open for Gardening</h1>
          </div>
          <div id="text">
            Looking for something easy to get started? Or are you searching for
            that one plant that will look great in your bedroom? These quick
            categories will get you started quickly!
          </div>
          <div id="products">
            <Card
              imageurl="first.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar"
            />
            <Card
              imageurl="second.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar2"
            />
            <Card
              imageurl="third.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar3"
            />
            <Card
              imageurl="first.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar"
            />
            <Card
              imageurl="second.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar2"
            />
            <Card
              imageurl="third.png"
              heading=" Plant"
              subheading="Explore our wide range"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, dolorum"
              colorbar="colorbar3"
            />
          </div>
          <button id="button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
