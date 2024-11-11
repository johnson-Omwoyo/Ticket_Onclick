import React, { useState } from "react";
import topImage from "../assets/ticket design.jpg";
import technologyPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/VirtuClear™ Linseneinsätze für die Oculus Quest 2.jpg";
import culturePhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Black Magic - Issuu.jpg";
import fashionPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Unknown-4.jpg";
import sportsPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/valentin-kremer-noqQBb1EKkc-unsplash.jpg";
import agriculturePhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/polina-kuzovkova-0OkidWKbO2Q-unsplash.jpg";
import expoPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Unknown-6.jpg";
import festivalsPhoto from "../assets/wetransfer_3-jpg_2024-11-08_0922/Your Complete Guide To The Best UK Festivals In 2019.jpg";
import "bootstrap/dist/css/bootstrap.css";

import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";

function Homepage() {
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const categories = [
    {
      image: technologyPhoto,
      name: "TECHNOLOGY",
      description: "TOMORROW IS TODAY",
    },
    {
      image: culturePhoto,
      name: "CULTURE",
      description: "I MEAN ALL OF US",
    },
    {
      image: sportsPhoto,
      name: "SPORTS",
      description: "ALL ABOUT THE BEAUTIFUL GAMES",
    },
    {
      image: fashionPhoto,
      name: "FASHION",
      description: "NOT JUST ABOUT CLOTHES",
    },
    {
      image: expoPhoto,
      name: "EXPO",
      description: "CHEC US OUT",
    },
    {
      image: festivalsPhoto,
      name: "FESTIVALS",
      description: "PEOPLE AND MUSIC",
    },
    {
      image: agriculturePhoto,
      name: "AGRICULTURE",
      description: "BEYOND WHAT WE EAT",
    },
  ];
  const handleCategoryClick = (name) => {
    handleClick("/events");

    console.log(name.toLowerCase());
    setTimeout(() => {
      const categoriesElement = document.getElementById(name);
      if (categoriesElement) {
        categoriesElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClick = (route) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(route);
    }, 2000);
  };

  return (
    <div id="home" className="container-fluid">
      <div className="row text-center my-3">
        <div className="col">
          <img className="top-image img-fluid" src={topImage} alt="Hero" />
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-4 hero-text text-center px-5">
          <h1 className="fs-1 pt-3">TICKET ONCLICK</h1>
          <p className="forget-about">
            Forget about missing an event, forget about your personal details
            security. Get yourself a ticket with very little hassle only at a
            click.
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="row categories p-5">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 id="categories" className="category-heading">
                  CATEGORIES
                </h1>
              </div>
            </div>

            <div className="row py-5 d-flex category-body">
              {categories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category.name)}
                  className="col-12 card the-card p-4 shadow"
                >
                  <img
                    className="img-fluid"
                    src={category.image}
                    alt={category.name}
                  />
                  <h3 className="category-name m-0 mt-2">{category.name}</h3>
                  <p className="category-description m-0">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <h2>About</h2>
              </div>
              <div className="col">
                <div className="container-fluid">
                  <div className="row">div.col</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
