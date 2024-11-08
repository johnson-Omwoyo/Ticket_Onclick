import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
