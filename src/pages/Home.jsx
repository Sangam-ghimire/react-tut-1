import React from "react";
import Indoorimg from "../assets/Indoor plant img.png";
import OutdoorPlant from "../assets/outdoor.png";
import Decoration from "../assets/decoration.png";
import peacelily from "../assets/piece lily.png";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div id="plantsection">
        <div id="Indoor">
          <div id="image1">
            <img src={Indoorimg} alt="error" />
          </div>
          <div id="text1">
            <div id="majortext1">Indoor Plant</div>
            <div id="minortext1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus maxime velit
            </div>
          </div>
        </div>
        <div id="Outdoor">
          <div id="image1">
            <img src={OutdoorPlant} alt="error" />
          </div>
          <div id="text1">
            <div id="majortext1">Outdoor Plant</div>
            <div id="minortext1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus maxime velit
            </div>
          </div>
        </div>
        <div id="Decoration">
          <div id="image1">
            <img src={Decoration} alt="error" />
          </div>
          <div id="text1">
            <div id="majortext1">Indoor Plant</div>
            <div id="minortext1">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus maxime velit
            </div>
          </div>
        </div>
      </div>
      <div id="featuredproducts">
        <div id="fheading"> Our featured product</div>
        <div id="fimage">
          <div className="fcard">
            <div id="discountribbon">save 4%</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={peacelily} alt="imagelily" />
              </div>
              <div id="ffname">Peace Lily</div>
              <div id="fftype">Indoor Plant</div>
            </div>
          </div>
          <div className="fcard">
            <div id="discountribbon">save 4%</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={peacelily} alt="imagelily" />
              </div>
              <div id="ffname">Peace Lily</div>
              <div id="fftype">Indoor Plant</div>
            </div>
          </div>
          <div className="fcard">
            <div id="discountribbon">save 4%</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={peacelily} alt="imagelily" />
              </div>
              <div id="ffname">Peace Lily</div>
              <div id="fftype">Indoor Plant</div>
            </div>
          </div>
          <div className="fcard">
            <div id="discountribbon">save 4%</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={peacelily} alt="imagelily" />
              </div>
              <div id="ffname">Peace Lily</div>
              <div id="fftype">Indoor Plant</div>
            </div>
          </div>
          <div className="fcard">
            <div id="discountribbon">Save 4%</div>
            <div id="fimgntext">
              <div id="ffimage">
                <img src={peacelily} alt="imagelily" />
              </div>
              <div id="ffname">Peace Lily</div>
              <div id="fftype">Indoor Plant</div>
            </div>
          </div>
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
            <div className="product">
              <img src={first} alt="sirste" />
              <div id="plantte">Plant</div>
              <div id="planttee">Explore our wide range</div>
              <div id="plantteee">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                dolorum.
              </div>
              <div id="colorbar"> </div>
            </div>
            <div className="product">
              <img src={second} alt="sirste" />
              <div id="plantte">Plant</div>
              <div id="planttee">Explore our wide range</div>
              <div id="plantteee">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                dolorum.
              </div>
              <div id="colorbar2"> </div>
            </div>
            <div className="product">
              <img src={third} alt="sirste" />
              <div id="plantte">Plant</div>
              <div id="planttee">Explore our wide range</div>
              <div id="plantteee">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
                dolorum.
              </div>
              <div id="colorbar3" > </div>
            </div>
          </div>
          <button id="button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
