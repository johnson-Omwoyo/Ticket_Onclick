import React, { useState } from "react";
import "./TicketPage.css"; // Import the custom CSS file
import event from "../assets/wetransfer_3-jpg_2024-11-08_0922/event.jpg";
import khabib from "../assets/wetransfer_3-jpg_2024-11-08_0922/Khabib vs McGregor.jpg";
import football from "../assets/wetransfer_3-jpg_2024-11-08_0922/football.jpg";

function TicketPage() {
  return (
    <>
      {/* Original container */}
      <div className="container-fluid ticket-page-container">
        <div className="row">
          <div className="col">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="sport-headings">Sports</h1>
                </div>
              </div>

              <div className="row d-flex justify-content-between align-items-center events-container p-2">
                <div className="col">
                  <img className="img-fluid event-img" src={football} alt="" />
                </div>
                <div className="col participants">
                  <p className="">MAN U - ARSENAL</p>
                  <p className="description">
                    LOCATION ACCESSIBLE AND STEP FREE
                  </p>
                </div>
                <div className="col">
                  <p className="">Venue Location</p>
                </div>
                <div className="col">
                  <div className="capacity">
                    25 <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between align-items-center events-container p-2">
                <div className="col">
                  <img className="img-fluid event-img" src={khabib} alt="" />
                </div>
                <div className="col participants">
                  <p className="">MMA - McGregor vs Khabib T-Mobile Arena</p>
                  <p className="description">
                    LOCATION ACCESSIBLE AND STEP FREE
                  </p>
                </div>
                <div className="col">
                  <p className="">Venue Location</p>
                </div>
                <div className="col">
                  <div className="capacity">
                    25 <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between align-items-center events-container p-2">
                <div className="col">
                  <img className="img-fluid event-img" src={event} alt="" />
                </div>
                <div className="col participants">
                  <p className="">BASKETBALL - LAKERS VS WARRIORS-</p>
                  <p className="description">
                    LOCATION ACCESSIBLE AND STEP FREE
                  </p>
                </div>
                <div className="col">
                  <p className="">Venue Location</p>
                </div>
                <div className="col">
                  <div className="capacity">
                    25 <i className="fa-solid fa-user-group"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      
      
    </>
  );
}

export default TicketPage;
