import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import sport1 "../assets/wetransfer_3-jpg_2024-11-08_0922/-4.jpg"
import "./Navbar.css";

function Navbar() {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); //  login status

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleCategoryClick = (route) => {
    navigate("/");
    setTimeout(() => {
      const categoriesElement = document.getElementById(route);
      if (categoriesElement) {
        categoriesElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  const handleClick = (route) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(route);
    }, 2000);
  };
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid rounded-lg navbar-ground p-4 mx-md-5 mt-md-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="logo me-5 " onClick={() => handleClick("/")}>
            <h1 className="ticket">TICKET</h1>
            <h1 className="onclick shadow">ONCLICK</h1>
          </div>
          <div className="page-name d-flex gap-5 mx-5 align-items-center">
            <li
              onClick={() => handleClick("/")}
              className={location.pathname == "/" ? "active" : ""}
            >
              HOME
            </li>
            <li
              onClick={() => handleClick("/events")}
              className={location.pathname == "/events" ? "active" : ""}
            >
              EVENTS
            </li>
            <li className="" onClick={() => handleCategoryClick("categories")}>
              CATEGORIES
            </li>
            <li className="" onClick={() => handleCategoryClick("about")}>
              ABOUT US
            </li>
          </div>
        </div>
        <div className="buttons">
          {isLoggedIn ? (
            <div className=""></div>
          ) : (
            <>
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                <i className="fa-regular fa-user"></i>{" "}
              </button>

              <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabIndex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header sidebar-header">
                  <h5
                    className="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Johnson Omwoyo
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body sidebar d-flex flex-column align-items-center">
                  <button
                    data-bs-dismiss="offcanvas"
                    className="btn"
                    onClick={() => navigate("/")}
                  >
                    My tickets
                  </button>
                  <div className="line my-3"></div>

                  <button
                    data-bs-dismiss="offcanvas"
                    className="btn"
                    onClick={() => navigate("/events")}
                  >
                    My profile
                  </button>
                  <div className="line my-3"></div>

                  <button
                    data-bs-dismiss="offcanvas"
                    className="btn"
                    onClick={() => navigate("/events")}
                  >
                    My profile
                  </button>
                  <div className="line my-3"></div>

                  <button
                    data-bs-dismiss="offcanvas"
                    className="btn"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                  <div className="line my-3"></div>
                </div>
              </div>
              {location.pathname != "/login" && (
                <button
                  className="btn btn-primary rounded-pill me-3 px-4"
                  onClick={() => {
                    handleClick("/login");
                  }}
                >
                  Login
                </button>
              )}

              {location.pathname != "/register" && (
                <button
                  onClick={() => {
                    handleClick("/register");
                  }}
                  className="btn rounded-pill px-3"
                >
                  Register
                </button>
              )}
            </>
          )}
        </div>
      </div>{" "}
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
