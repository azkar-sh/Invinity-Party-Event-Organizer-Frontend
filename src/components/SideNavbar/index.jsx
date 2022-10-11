import React from "react";
import bookingIcon from "../../assets/img/detailUser/booking-icon.png";
import changePassIcon from "../../assets/img/detailUser/change-pass-icon.png";
import editProfileIcon from "../../assets/img/detailUser/edit-icon.png";
import logoutIcon from "../../assets/img/detailUser/logout-icon.png";
import profileIcon from "../../assets/img/detailUser/profile-icon.png";
import wishlistIcon from "../../assets/img/detailUser/wishlist-icon.png";
import settingIcon from "../../assets/img/detailUser/setting-icon.png";
import axios from "../../utils/axios";
import "./index.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SideNavbar() {
  const [userData, setUserData] = useState([]);
  const [defaultImage, setDefaultImage] = useState(null);
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const response = await axios.get(`/user/${userId}`);
      setUserData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const navigationUser = (path) => {
    navigate(`/user/${path}/${userId}`);
  };

  const userName = userData.name;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userData.image}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${userData.username}`;
  console.log(userData);
  console.log(getUserData);
  console.log(setDefaultImage);

  return (
    <>
      <div className="d-flex flex-row">
        <div className="col d-flex align-items-center mb-3">
          <div className="col-sm-3">
            <img
              src={defaultImage ? userImage : randomImage}
              alt=""
              className="w-50 rounded-5 border border-primary"
            />
          </div>
          <div className="col-sm-8">
            <div className="p">{userName ? userName : "User Profile"}</div>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <button className="btn w-75 text-start btn-hover">
          {" "}
          <img src={profileIcon} alt="" /> Profile
        </button>
      </div>
      <div className="col ms-3 mb-3">
        <button
          className="btn w-75 text-start btn-hover"
          onClick={() => navigationUser("edit")}
        >
          {" "}
          <img src={editProfileIcon} alt="" /> Edit Profile
        </button>
      </div>
      <div className="col ms-3 mb-3">
        <button className="btn w-75 text-start btn-hover">
          {" "}
          <img src={changePassIcon} alt="" /> Change Password
        </button>
      </div>
      <div className="col mb-3">
        <button className="btn w-75 text-start btn-hover">
          {" "}
          <img src={bookingIcon} /> My Booking
        </button>
      </div>
      <div className="col mb-3">
        <button className="btn w-75 text-start btn-hover">
          {" "}
          <img src={wishlistIcon} alt="" /> My Wishlist
        </button>
      </div>
      <div className="col mb-3">
        <button className="btn w-75 text-start btn-hover">
          {" "}
          <img src={settingIcon} alt="" /> Settings
        </button>
      </div>
      <div className="col mb-3">
        <button className="btn w-75 text-start text-danger btn-hover">
          {" "}
          <img src={logoutIcon} alt="" /> Logout
        </button>
      </div>
    </>
  );
}