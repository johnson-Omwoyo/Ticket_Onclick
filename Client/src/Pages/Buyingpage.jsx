import React, { useState } from "react";
import sports from "../assets/wetransfer_3-jpg_2024-11-08_0922/Sports Ticket Invitation Template in Pages, Illustrator, PSD, Publisher, Word, Outlook - Download � Template_net.jpg";
import "./Buying.css";
import { useLocation } from "react-router-dom";

function Buyingpage() {
  const eventData = useLocation().state?.event;
  const [pay, setPay] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleOpen = (ticket) => {
    setSelectedTicket(ticket);
    setPay(true);
  };
  const handleClose = () => setPay(false);
  const handleSave = () => {
    console.log("Ticket purchased:", selectedTicket);
    setPay(false);
  };

  if (!eventData) return <p>No event data available.</p>;

  const ticketOptions = [
    {
      type: "Early-Bird Tickets",
      price: eventData.cost,
      description: "Inclusive of booking fee and local taxes.",
    },
    {
      type: "VIP Tickets",
      price: eventData.cost + 20,
      description: "Get the best seats in the house with VIP tickets.",
    },
    {
      type: "Gate Tickets",
      price: eventData.cost + 5,
      description: "Come one come all and enjoy the show.",
    },
  ];

  return (
    <div className="container-fluid py-2 buy-ticket">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col image-side">
                <img
                  className="my-4 event-image"
                  src={sports}
                  alt="Ticket Image"
                />
                <h1>{eventData.title}</h1>
                <div className="line" style={{ background: "white" }}></div>
              </div>

              <div
                style={{ color: "rgb(211, 209, 209)" }}
                className="col d-flex flex-column justify-content-center cost"
              >
                {ticketOptions.map((ticket, index) => (
                  <div key={index}>
                    <h6 className="text-uppercase">Advance Ticket Sales</h6>
                    <div className="ticket-option d-flex justify-content-between align-items-center my-3">
                      <h2 className="ticket-type">{ticket.type}</h2>
                      <h2 className="ticket-price ms-auto">${ticket.price}</h2>
                      <button
                        className="btn btn-primary mx-5"
                        onClick={() => handleOpen(ticket)}
                      >
                        <i
                          className="fa-solid fa-cart-shopping"
                          style={{ color: "white", fontSize: "32px" }}
                        ></i>
                      </button>
                    </div>
                    <p className="ticket-description">{ticket.description}</p>
                    <div className="line"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-custom ${pay ? "show" : ""}`}>
        <div className="modal-custom-content">
          <span className="close-custom" onClick={handleClose}>
            &times;
          </span>
          <h2>Confirm Details and Purchase</h2>
          {selectedTicket && (
            <>
              <p>Event name: {eventData.title}</p>
              <p>Ticket type: {selectedTicket.type}</p>
              <p>Price: ${selectedTicket.price}</p>
              <p>Description: {selectedTicket.description}</p>
              <p>Are you sure you want to purchase this ticket?</p>
            </>
          )}
          <div className="modal-custom-footer">
            <button className="btn btn-secondary" onClick={handleClose}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyingpage;
