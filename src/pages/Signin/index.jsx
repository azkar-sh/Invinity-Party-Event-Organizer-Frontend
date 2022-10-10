import "./index.css";
import authBanner from "../../assets/img/Auth/auth-banner.png";
import logo from "../../assets/img/Inviticket.png";
import googleIcon from "../../assets/img/Auth/google-icon.png";
import facebookIcon from "../../assets/img/Auth/facebook-icon.png";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("userId", result.data.data.userId);
      localStorage.setItem("token", result.data.data.token);
      alert(JSON.stringify(result.data.msg));
      navigate("/");
      console.log(result);
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
                <span className="h2">Sign In</span>
              </div>
              <div className="col mb-3">
                <span className="h6">Hi, Welcome Back to Inviticket!</span>
              </div>
              <div className="col">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control my-3"
                    name="email"
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

                  {/* Forgot Passowrd? */}
                  <div className="input-group justify-content-end">
                    <a href="forgot-password.html">Forgot Password?</a>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 my-3"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </div>

                <div className="col text-center">
                  <span>Or Sign In With</span>
                </div>

                <div className="col d-flex flex-row justify-content-evenly my-4">
                  <img
                    src={googleIcon}
                    alt=""
                    // className="border rounded-1"
                    style={{ width: "10%" }}
                  />
                  <img
                    src={facebookIcon}
                    alt=""
                    // className="border rounded-1"
                    style={{ width: "10%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
