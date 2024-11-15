import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Organizerpage.css";

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [cost, setCost] = useState("");
  const [capacity, setCapacity] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const eventData = {
        title,
        description,
        date,
        location,
        cost,
        capacity,
        category,
      };
      const response = await axios.post(
        "http://localhost:5000/events",
        eventData
      );
      onAddEvent(response.data);
      setTitle("");
      setDescription("");
      setDate("");
      setLocation("");
      setCost("");
      setCapacity("");
      setCategory("");
    } catch (err) {
      console.error("Error adding event", err);
      setError("Failed to add event. Please try again.");
    }
  };

  return (
    <form className="d-flex flex-column mt-5 gap-3" onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <input
        className="form-control"
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className="form-control"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Location"
        required
      />
      <input
        className="form-control"
        type="number"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        placeholder="Capacity"
        required
      />
      <input
        className="form-control"
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Cost"
        required
      />
      <select
        className="form-control"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Category
        </option>
        <option value="sport">Sport</option>
        <option value="technology">Technology</option>
        <option value="culture">Culture</option>
        <option value="fashion">Fashion</option>
        <option value="expo">Expo</option>
        <option value="festival">Festival</option>
        <option value="agriculture">Agriculture</option>
      </select>
      <textarea
        className="form-control"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Small Description"
        required
      />
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-danger submit-event" type="submit">
        Add Event
      </button>
    </form>
  );
};

const OrganizerPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/events");
        setEvents(response.data);
      } catch (err) {
        console.error("Error fetching events", err);
      }
    };
    fetchEvents();
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <div className="container-fluid organizer-add">
      <div className="container">
        <h1 className="text-center mt-3">Add Events</h1>
        <EventForm onAddEvent={handleAddEvent} />
        
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{new Date(event.date).toLocaleString()}</small>
                  </p>
                  <p className="card-text">Location: {event.location}</p>
                  <p className="card-text">Cost: ${event.cost}</p>
                  <p className="card-text">Capacity: {event.capacity}</p>
                  <p className="card-text">Category: {event.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrganizerPage;
