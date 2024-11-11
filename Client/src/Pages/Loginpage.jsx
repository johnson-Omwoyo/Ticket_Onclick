import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./LoginPage.css"; // Import the CSS for login page
import loginPicture from "../assets/wetransfer_3-jpg_2024-11-08_0922/Beating the odds_.jpg"; // Adjust the path if necessary

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // Send login data to the backend
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect to the homepage or user dashboard after successful login
          window.location.href = "/home"; // Adjust to your redirect URL
        } else {
          // Show error message
          alert("Login failed, please try again.");
        }
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5  bg-dark">
      <h3 className="text-white font-weight-bold mb-4 text-center w-100">Login</h3>
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '1000px' }}>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-center">Login</h4>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">Password</label>
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
                <button type="submit" className="btn btn-danger w-100" style={{ maxWidth: '120px' }}>
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={loginPicture} alt="Login" className="image-fluid img-fluid rounded" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
