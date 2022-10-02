import "./index.css";
import authBanner from "../../assets/img/Auth/auth-banner.png";
import logo from "../../assets/img/Inviticket.png";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const navigationHandler = (path) => {
    navigate(`/${path}`);
  };

  return (
    <div>
      <div className="container-fluid p-0">
        <div className="d-flex flex-row justify-content-evenly">
          <div className="col-md-6">
            <div className="auth-banner">
              <img
                src={authBanner}
                alt="auth-banner"
                className="img-fluid bg-primary"
              />
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center justify-content-center mx-auto">
            <div className="auth-form">
              <div className="col">
                <img
                  src={logo}
                  alt=""
                  className="mb-3"
                  style={{ width: "35%" }}
                  onClick={() => navigationHandler("")}
                />
              </div>
              <div className="col mb-3">
                <span className="h2">Sign Up</span>
              </div>
              <div className="col mb-5">
                <span className="h6">
                  Already have an account?{" "}
                  <a
                    onClick={() => navigationHandler("signin")}
                    className="text-decoration-none"
                  >
                    Sign In
                  </a>
                </span>
              </div>
              <div className="col">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control my-3"
                    id="inputName"
                    aria-describedby="nameHelp"
                    placeholder="Full Name"
                  />

                  <input
                    type="email"
                    className="form-control my-3"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />

                  <input
                    type="password"
                    className="form-control my-3"
                    id="inputPassword"
                    placeholder="Password"
                  />

                  <input
                    type="password"
                    className="form-control my-3"
                    id="inputConfirmPassword"
                    placeholder="Confirm Password"
                  />

                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to the{" "}
                      <a href="#" className="text-decoration-none">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 my-3">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
