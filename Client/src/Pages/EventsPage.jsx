import React, { useState, useEffect } from "react";
import "./EventsPage.css"; // Import the custom CSS file
import event from "../assets/wetransfer_3-jpg_2024-11-08_0922/event.jpg";
import khabib from "../assets/wetransfer_3-jpg_2024-11-08_0922/Khabib vs McGregor.jpg";
import football from "../assets/wetransfer_3-jpg_2024-11-08_0922/football.jpg";
import { useNavigate } from "react-router-dom";

function EventsPage() {
  const navigate = useNavigate();
  const addToCalendar = (even) => {
    console.log(even);
    const eventTitle = encodeURIComponent(even.title);
    const eventStartDate = encodeURIComponent(`${even.date}T${even.time}`); // Start date in ISO format
    const eventEndDate = encodeURIComponent("2024-11-8T19:00:00"); // End date in ISO format
    const eventDescription = encodeURIComponent(even.description);
    const eventLocation = encodeURIComponent(even.location);

    const calendarUrl = `https://calendar.google.com/calendar/r/eventedit?text=${eventTitle}&dates=${eventStartDate}/${eventEndDate}&details=${eventDescription}&location=${eventLocation}`;

    window.open(calendarUrl, "_blank");
  };
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "MAN U - ARSENAL",
      description: "LOCATION ACCESSIBLE AND STEP FREE",
      date: "2024-11-08",
      time: "14:00:00",
      location: "Venue Location",
      capacity: 25,
      image_url: football,
      cost: 12,
    },
    {
      id: 2,
      title: "McGregor vs Khabib ",
      description: "LOCATION ACCESSIBLE AND STEP FREE",
      date: "2024-11-09",
      time: "14:00:00",
      location: "Venue Location",
      capacity: 25,
      image_url: khabib,
      cost: 30,
    },
    {
      id: 3,
      title: "LAKERS VS WARRIORS",
      description: "LOCATION ACCESSIBLE AND STEP FREE",
      date: "2024-11-10",
      time: "14:00:00",
      location: "Venue Location",
      capacity: 25,
      image_url: event,
      cost: 13,
    },
  ]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events", error);
      }
    };
    fetchEvents();
  }, []);
  return (
    <div className="container-fluid ticket-page-container">
      {" "}
      <div className="row">
        {" "}
        <div className="col">
          {" "}
          <div className=" container">
            {" "}
            <div className="row">
              {" "}
              <div className="col">
                {" "}
                <h1 id="sports" className="sport-headings">
                  Sports
                </h1>{" "}
              </div>{" "}
            </div>{" "}
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() =>
                  navigate(`/buying/${event.id}`, { state: { event } })
                }
                className=" eventcard row d-flex justify-content-between align-items-center events-container p-2"
              >
                {" "}
                <div className="col">
                  {" "}
                  <img
                    className="img-fluid event-img"
                    src={event.image_url}
                    alt={event.title}
                  />{" "}
                </div>{" "}
                <div className="col participants">
                  {" "}
                  <p>{event.title}</p> <p>Date : {event.date}</p>
                  <p>Time : {event.time}</p>
                  <p style={{ fontWeight: "600" }}>cost : ${event.cost}</p>
                  <p className="description">{event.description} </p>{" "}
                </div>{" "}
                <div className="col">
                  {" "}
                  <p>{event.location}</p>{" "}
                </div>{" "}
                <div className="col d-flex gap-3">
                  {" "}
                  <div className="capacity p-2 rounded">
                    {" "}
                    {
                      event.capacity
                    } <i className="fa-solid fa-user-group"></i>{" "}
                  </div>{" "}
                  <div
                    onClick={() => addToCalendar(event)}
                    className="capacity p-2 rounded"
                  >
                    save
                  </div>
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default EventsPage;
