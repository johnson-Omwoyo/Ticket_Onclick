import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar bg-light">
      <div className=" container-fluid rounded-lg navbar-ground p-4 mx-md-5 mt-md-3 d-flex justify-content-between align-items-center ">
        <button
          className="btn "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabindex="-1"
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Backdrop with scrolling
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <p>
              Try scrolling the rest of the page to see this option in action.
            </p>
          </div>
        </div>

        <div className="page-name">
          <i class="fa-solid fa-house"> </i>
          <span> HOME</span>
        </div>

        <div className="buttons">
          <i class="fa-regular fa-user me-3" style={{ color: "white" }}></i>
          <button className="btn rounded-pill me-3 px-4">Login</button>
          <button className="btn rounded-pill px-3 ">Register</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
