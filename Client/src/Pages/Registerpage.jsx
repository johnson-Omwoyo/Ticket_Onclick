import React, { useState } from "react";
import registerPicture from "../assets/wetransfer_3-jpg_2024-11-08_0922/Premium Vector � Event party ticket template.jpg"; // Add your image path here
// import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to the backend
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Handle successful registration (e.g., redirect to login)
        } else {
          // Handle error (e.g., show a message)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center  bg-dark py-5">
      <h3 className="text-white font-weight-bold mb-4 text-center w-100">
        Register{" "}
      </h3>
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "1000px" }}>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button
                  type="submit"
                  className="btn btn-danger w-100"
                  style={{ maxWidth: "120px" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src={registerPicture}
              alt="Register"
              className="image-fluid img-fluid rounded"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
