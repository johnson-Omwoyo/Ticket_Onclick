import React from "react";
import topImage from "../assets/ticket design.jpg";
import technologyPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/VirtuClear™ Linseneinsätze für die Oculus Quest 2.jpg";
import culturePhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Black Magic - Issuu.jpg";
import fashionPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Unknown-4.jpg";
import sportsPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/valentin-kremer-noqQBb1EKkc-unsplash.jpg";
import agriculturePhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/polina-kuzovkova-0OkidWKbO2Q-unsplash.jpg"
import "./Home.css";

function Homepage() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row text-center my-3">
          <div className="col">
            <img className=" top-image img-fluid" src={topImage} alt="" />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className=" col-10 col-md-4 hero-text text-center px-5">
            <h1 className="fs-1 pt-3">TICKET ONCLICK</h1>
            <p className="forget-about">
              Forget about missing an event, forget about your personal details
              security. Get yourself a ticket with very little hutsle only at a
              click.
            </p>
          </div>
        </div>
        <div className="row categories p-5">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="category-heading">CATEGORIES</h1>
                </div>
              </div>
              <div className="row category-body">
                <div className="col card p-4 mx-2  ">
                  <img src={technologyPhoto} alt="" />
                  <h3 className="category-name">TECHNOLOGY</h3>
                  <h5 className="category-description">TOMORROW IS TODAY</h5>
                </div>
                <div className="col card p-4 mx-2 ">
                  <img src={culturePhoto} alt="" />
                  <h3 className="category-name">CULTURE</h3>
                  <h5 className="category-description">I MEAN ALL OF US</h5>
                </div>{" "}
                <div className="col card p-4 mx-2 ">
                  <img src={sportsPhoto} alt="" />

                  <h3 className="category-name">SPORTS </h3>
                  <h5 className="category-description">
                    ALL ABOUT THE BEAUTIFUL GAMES
                  </h5>
                </div>{" "}
                <div className="col card p-4 mx-2 ">
                  <img src={fashionPhoto} alt="" />
                  <h3 className="category-name">FASHION</h3>
                  <h5 className="category-description">
                    NOT JUST ABOUT CLOTHES
                  </h5>
                </div>
              </div>
              <div className="row category-body mt-5">
                <div className="col-3 card p-4 mx-2 ">
                  <img src={culturePhoto} alt="" />
                  <h3 className="category-name">EXPO</h3>
                  <h5 className="category-description">I MEAN ALL OF US</h5>
                </div>{" "}
                <div className="col-3 card p-4 mx-2 ">
                  <img src={sportsPhoto} alt="" />

                  <h3 className="category-name">FESTIVALS </h3>
                  <h5 className="category-description">
                    ALL ABOUT THE BEAUTIFUL GAMES
                  </h5>
                </div>{" "}
                <div className="col-3 card p-4 mx-2 ">
                  <img src={agriculturePhoto} alt="" />
                  <h3 className="category-name">AGRICULTURE</h3>
                  <h5 className="category-description">
                    NOT JUST ABOUT CLOTHES
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
