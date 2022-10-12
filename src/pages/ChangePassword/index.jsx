import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getDataUserById, updateDataUser } from "../../stores/actions/user";

export default function ChangePassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [updateData, setUpdateData] = useState({
    newPassword: "",
  });

  useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getDataUserById(userId));
  }, [userId]);

  const handleChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(updateDataUser(userId, updateData));
    navigate(`/user/${userId}`);
  };

  // console.log(setDefaultImage);
  // console.log(handleChange);

  return (
    <div className="bg-light">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="col-sm-3">
              {/* Side Navbar */}
              <SideNavbar />
            </div>
            <div className="col-sm-9">
              <div className="container bg-white rounded-5">
                <div className="px-4 pt-5">
                  <h2>Change Password</h2>
                  <hr />
                </div>
                <div className="row px-4 py-3">
                  <div className="col-sm-12">
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Old Passowrd
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control w-100"
                          name="oldPassword"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        New Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control w-100"
                          name="newPassword"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Confirm New Password
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="password"
                          className="form-control w-100"
                          name="confirmPassword"
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="my-5 row">
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-primary w-50"
                          name="submit"
                          onClick={handleUpdate}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
