import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./LoginPage.css"; // Import the CSS for login page
import loginPicture from "../assets/wetransfer_3-jpg_2024-11-08_0922/Beating the odds_.jpg"; // Adjust the path if necessary

const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState('');

  // Use Formik hook
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Username is required'),
      password: Yup.string()
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      // Log the form data to the console
      console.log('Form Submitted:', values);

      // Send login data to the backend
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          // Log the response data to the console
          console.log('Response from Backend:', data);

          if (data.success) {
            // Set login success status and redirect
            setLoginStatus('Successfully logged in!');
            window.location.href = "/home"; // Adjust to your redirect URL
          } else {
            // Set not registered status
            setLoginStatus('Not registered or invalid credentials.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoginStatus('An error occurred. Please try again.');
        });
    },
  });

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5 bg-dark">
      <h3 className="text-white font-weight-bold mb-4 text-center w-100">Login</h3>
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: '1000px' }}>
        <div className="row">
          <div className="col-md-6">
            <h4 className="text-center">Login</h4>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-4">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-danger">{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-danger w-100" style={{ maxWidth: '120px' }}>
                  Login
                </button>
              </div>
            </form>
            {loginStatus && (
              <div className="mt-3 text-center text-light">
                <strong>{loginStatus}</strong>
              </div>
            )}
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
