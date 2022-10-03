import "./index.css";
import authBanner from "../../assets/img/Auth/auth-banner.png";
import logo from "../../assets/img/Inviticket.png";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    try {
      const result = await axios.post("api/auth/register", form);
      alert(JSON.stringify(result.data.msg));
      navigate("/signin");
    } catch (error) {
      alert(error.response.data.msg);
    }
  };

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
                    name="username"
                    aria-describedby="nameHelp"
                    placeholder="Username"
                    onChange={handleInputChange}
                  />

                  <input
                    type="email"
                    className="form-control my-3"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  <div className="input-group my-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      style={{ width: "15%" }}
                      onClick={handleShowPassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <div className="input-group">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className="form-control"
                      name="password"
                      placeholder="Confirm Password"
                      onChange={handleInputChange}
                    />
                    <button
                      className="btn btn-primary"
                      style={{ width: "15%" }}
                      onClick={handleShowConfirmPassword}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>

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
                  <button
                    type="submit"
                    className="btn btn-primary w-100 my-3"
                    onClick={handleSignup}
                  >
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
