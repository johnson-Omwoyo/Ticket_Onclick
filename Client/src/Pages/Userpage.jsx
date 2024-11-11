import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./User.css"; // Importing the new CSS for user profile page

function UserProfilePage() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // For showing/hiding the modal
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
    location: "San Francisco, CA",
  });

  const [formData, setFormData] = useState({ ...userDetails });
  const [formErrors, setFormErrors] = useState({});

  const activeTickets = [
    {
      id: 1,
      eventName: "Tech Conference 2024",
      eventDate: "15th Jan 2024",
      venue: "Tech Hall, San Francisco",
      ticketLink: "#", // Link to view/download ticket
    },
    {
      id: 2,
      eventName: "Music Festival 2024",
      eventDate: "20th Feb 2024",
      venue: "Festival Grounds, LA",
      ticketLink: "#", // Link to view/download ticket
    },
    {
      id: 3,
      eventName: "Art Expo 2024",
      eventDate: "10th Mar 2024",
      venue: "Art Gallery, New York",
      ticketLink: "#", // Link to view/download ticket
    },
  ];

  const handleEditProfile = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ ...userDetails });
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    const { name, email, phone, location } = formData;

    if (!name) errors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email))
      errors.email = "Valid email is required";
    if (!phone) errors.phone = "Phone number is required";
    if (!location) errors.location = "Location is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      setUserDetails({ ...formData });
      setShowModal(false);
      console.log("Profile updated", formData);
    }
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("User Logged Out");
  };

  return (
    <div id="user-profile" className="container-fluid">
      {/* Hero Section */}
      <div className="row m-3">
        <div className="col"></div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-10 col-md-4 hero-text text-center px-5">
          <h1 className="fs-1 pt-3">USER PROFILE</h1>
          <p className="forget-about">
            Welcome to your profile page! Here you can manage your account and
            check your event history.
          </p>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="row profile-details p-5">
        <div className="col">
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-3 card p-4 shadow">
                <div className="d-flex gap-2">
                  <img
                    className="top-image img-fluid"
                    src="https://images.unsplash.com/photo-1533618561606-3b2a0766d159?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User Profile"
                  />
                  <h3 className="profile-name">{userDetails.name}</h3>
                </div>
                <p className="profile-description">
                  Tech enthusiast, traveler, and event lover.
                </p>

                <div className="profile-info">
                  <p>
                    <strong>Email:</strong> {userDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {userDetails.phone}
                  </p>
                  <p>
                    <strong>Location:</strong> {userDetails.location}
                  </p>
                </div>

                <div className="d-flex justify-content-center mt-4">
                  <button
                    onClick={handleEditProfile}
                    className="custom-btn-danger w-100"
                    style={{ maxWidth: "120px" }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
              <div className="col">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <h1 className="event-heading">ACTIVE TICKETS</h1>
                    </div>
                  </div>

                  <div className="row py-5 d-flex category-body">
                    {activeTickets.map((ticket) => (
                      <div
                        key={ticket.id}
                        className="col-12 card the-card p-4 shadow"
                      >
                        <h3 className="category-name m-0 mt-2">
                          {ticket.eventName}
                        </h3>
                        <p className="category-description m-0">
                          {ticket.venue}
                        </p>
                        <p className="category-date">
                          Event Date: {ticket.eventDate}
                        </p>
                        <div className="d-flex justify-content-between mt-3">
                          <a
                            href={ticket.ticketLink}
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Ticket
                          </a>
                          <button
                            onClick={() =>
                              console.log(
                                `Downloading ticket for ${ticket.eventName}`
                              )
                            }
                            className="btn btn-success"
                          >
                            Download Ticket
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Tickets Section */}
      <div className="row active-tickets p-5"></div>

      {/* Logout Section */}
      <div className="row logout-section text-center ">
        <div className="col">
          <button
            onClick={handleLogout}
            className="btn btn-danger w-100"
            style={{ maxWidth: "150px" }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block" }}
          aria-labelledby="editProfileModalLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editProfileModalLabel">
                  Edit Profile
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.name ? "is-invalid" : ""
                      }`}
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {formErrors.name && (
                      <div className="invalid-feedback">{formErrors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className={`form-control ${
                        formErrors.email ? "is-invalid" : ""
                      }`}
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {formErrors.email && (
                      <div className="invalid-feedback">{formErrors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.phone ? "is-invalid" : ""
                      }`}
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {formErrors.phone && (
                      <div className="invalid-feedback">{formErrors.phone}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="location" className="form-label">
                      Location
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        formErrors.location ? "is-invalid" : ""
                      }`}
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                    {formErrors.location && (
                      <div className="invalid-feedback">
                        {formErrors.location}
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
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

export default UserProfilePage;
