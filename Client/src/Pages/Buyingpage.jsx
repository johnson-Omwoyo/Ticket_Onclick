import React from 'react';
import sports from "../assets/wetransfer_3-jpg_2024-11-08_0922/Sports Ticket Invitation Template in Pages, Illustrator, PSD, Publisher, Word, Outlook - Download � Template_net.jpg";
import './Buying.css';

function Buyingpage() {
  const ticketOptions = [
    {
      type: "Early-Bird Tickets",
      price: "$160",
      description: "Inclusive of booking fee and local taxes.",
    },
    {
      type: "VIP Tickets",
      price: "$500",
      description: "Get the best seats in the house with VIP tickets.",
    },
    {
      type: "Gate Tickets",
      price: "$260",
      description: "Come one come all and enjoy the show.",
    }
  ];

  return (
    <div className="container-fluid py-2 buy-ticket">
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row">
              <div className="col image-side">
                <img className="my-4 event-image" src={sports} alt="Ticket Image" />
                <h1>TICKETS</h1>
                <div className="line" style={{ background: "white" }}></div>
              </div>

              <div style={{color:"rgb(211, 209, 209)"}} className="col d-flex flex-column justify-content-center cost">
                {ticketOptions.map((ticket, index) => (
                  <div key={index}>
                    <h6 className="text-uppercase">Advance Ticket Sales</h6>
                    <div className="ticket-option d-flex justify-content-between align-items-center my-3">
                      <h2 className="ticket-type">{ticket.type}</h2>
                      <h2 className="ticket-price ms-auto">{ticket.price}</h2>
                      <button className="btn  mx-5"><i class="fa-solid fa-cart-shopping" style={{color:"white", fontSize:"32px"}}></i></button>
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
    </div>
  );
}

export default Buyingpage;
