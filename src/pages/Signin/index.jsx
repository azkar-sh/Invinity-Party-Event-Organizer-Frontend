import "./index.css";
import authBanner from "../../assets/img/Auth/auth-banner.png";
import logo from "../../assets/img/Inviticket.png";
import googleIcon from "../../assets/img/Auth/google-icon.png";
import facebookIcon from "../../assets/img/Auth/facebook-icon.png";
// import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../stores/actions/auth";
import { getDataUserById } from "../../stores/actions/user";
import { getDataEvent } from "../../stores/actions/event";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDataWishlistByUserId } from "../../stores/actions/wishlist";
import { getBookingDataByUserId } from "../../stores/actions/booking";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    dispatch(login(form))
      .then((response) => {
        toast.success(response.value.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        localStorage.setItem("token", response.value.data.data.token);
        dispatch(getDataUserById(response.value.data.data.userId));
        dispatch(getDataWishlistByUserId(response.value.data.data.userId));
        dispatch(getBookingDataByUserId(response.value.data.data.userId));
        dispatch(getDataEvent());
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
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
                  <ToastContainer />
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
