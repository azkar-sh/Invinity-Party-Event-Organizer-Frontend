import React from "react";
import logo from "../../assets/img/Inviticket.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const isLogin = localStorage.getItem("token");
  const isAdmin = userData?.role;

  const logout = () => {
    if (confirm("Are you sure want to logout?")) {
      localStorage.clear();
      navigate("/");
    }
  };

  const userName = userData?.name;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userData?.image}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${userData?.username}`;

  const navigationHandler = (path) => {
    navigate(`/${path}`);
  };

  const navigationHandlerUser = () => {
    navigate(`/user/${userData.userId}`);
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
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </a>
                </li>
                {isAdmin === 1 ? (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      onClick={() => navigationHandler("create-event")}
                      style={{ cursor: "pointer" }}
                    >
                      Create Event
                    </a>
                  </li>
                ) : (
                  <></>
                )}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    style={{ cursor: "pointer" }}
                  >
                    Location
                  </a>
                </li>
              </ul>

              {isLogin ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-white dropdown-toggle text-end"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={userData?.image !== null ? userImage : randomImage}
                        alt="avatar"
                        className="rounded-pill mx-3 border border-2 border-primary"
                        style={{ width: "40px" }}
                      />
                      {userName ? userName : "User Profile"}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={navigationHandlerUser}
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-danger"
                          onClick={logout}
                        >
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
