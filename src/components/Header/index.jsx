import React from "react";
import logo from "../../assets/img/Inviticket.png";
import noPhoto from "../../assets/img/no-photo.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("token");
  const userName = localStorage.getItem("name");
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navigationHandler = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div>
      <header className="mb-header">
        <nav className="navbar fixed-top navbar-expand-lg bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => navigationHandler("")}>
              <img
                src={logo}
                alt="Inviticket Logo"
                style={{ width: "120px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-lg-0 justify-content-center">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => navigationHandler("")}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Create Event
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Location
                  </a>
                </li>
              </ul>

              {isLogin ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-white dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={noPhoto}
                        alt="avatar"
                        className="rounded-pill mx-3 border border-2 border-primary"
                        style={{ width: "40px" }}
                      />
                      {userName ? userName : "User Profile"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={logout}>
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="navbar-nav justify-content-center">
                    <a
                      className="btn btn-light me-2"
                      role="button"
                      style={{ width: "120px" }}
                      onClick={() => navigationHandler("signin")}
                    >
                      Log In
                    </a>
                    <a
                      className="btn btn-primary"
                      role="button"
                      style={{ width: "120px" }}
                      onClick={() => navigationHandler("signup")}
                    >
                      Sign Up
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
