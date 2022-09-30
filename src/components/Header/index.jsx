import React from "react";
import logo from "../../assets/img/Inviticket.png";
import "./index.css";

export default function Header() {
  return (
    <div>
      <header className="mb-header">
        <nav className="navbar fixed-top navbar-expand-lg bg-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
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
                  <a className="nav-link active" aria-current="page" href="#">
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

              <div className="navbar-nav justify-content-center">
                <a
                  className="btn btn-white"
                  href="sign-in.html"
                  role="button"
                  style={{ width: "120px" }}
                >
                  Log In
                </a>
                <a
                  className="btn btn-primary"
                  href="sign-up.html"
                  role="button"
                  style={{ width: "120px" }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
