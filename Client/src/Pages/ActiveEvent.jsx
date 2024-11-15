import React, { useState, useEffect } from "react";
import "./ActiveEvent.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function ActiveEvent() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchEvents = async () => {
      const sampleEvents = [
        {
          id: 1,
          title: "Tech Conference 2024",
          description: "A tech conference for industry professionals.",
          date: "2024-11-08T14:00:00Z",
          location: "Convention Center, Nairobi",
        },
        {
          id: 2,
          title: "Music Festival",
          description: "A day-long festival with multiple bands.",
          date: "2024-12-01T09:00:00Z",
          location: "City Park, Nairobi",
        },
        // Add more sample events as needed
      ];
      setEvents(sampleEvents);
    };

    fetchEvents();
  }, []);

  return (
    <div className="profile-container p-4">
      <h1 className="profile-title">Active Events</h1>
      <hr className="my-4" />
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-6 mb-4">
            <div className="card naming-containers">
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p className="card-text">{event.description}</p>
                <p className="card-text">
                  {new Date(event.date).toLocaleString()}
                </p>
                <p className="card-text">{event.location}</p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary edit">
                    <i className="fa-solid fa-edit"></i> Edit Event
                  </button>
                  <button className="btn btn-outline-danger delete-container">
                    <i className="fa-solid fa-trash"></i> Delete Event
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActiveEvent;
