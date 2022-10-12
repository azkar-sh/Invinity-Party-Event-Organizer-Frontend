import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";

export default function DetailUser() {
  const [userData, setUserData] = useState([]);
  const userId = localStorage.getItem("userId");
  const [defaultImage, setDefaultImage] = useState(null);

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

  //   const userName = userData.name;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userData.image}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${userData.username}`;

  console.log(setDefaultImage);

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
                  <h2>Edit Profile</h2>
                </div>
                <div className="row px-4 py-3">
                  <div className="col-sm-8">
                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Name</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="name"
                          placeholder={userData.name}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Username
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="username"
                          placeholder={userData.username}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control-plaintext w-75"
                          name="email"
                          placeholder={userData.email}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Phone Number
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="phoneNumber"
                          placeholder={userData.phoneNumber}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="d-flex flex-row align-items-center col-sm-9">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            value="male"
                          />
                          <label className="form-check-label" name="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            value="female"
                          />
                          <label className="form-check-label" name="female">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Profession
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="profession"
                          placeholder={userData.profession}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Nationality
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="nationality"
                          placeholder={userData.nationality}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">
                        Birthday Date
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control w-75"
                          name="dateOfBirth"
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => {
                            e.target.type = "text";
                          }}
                          placeholder={userData.dateOfBirth}
                        />
                      </div>
                    </div>

                    <div className="my-5 row">
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          name="submit"
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 text-center">
                    <img
                      src={defaultImage ? userImage : randomImage}
                      alt=""
                      className="w-100 rounded-circle"
                    />
                    <button className="btn btn-outline-primary mt-3">
                      Change Image Profile
                    </button>
                    <br />
                    <small className="text-muted">
                      Image size max. 500 KB <br /> Image formats: .jpg .jpeg
                      .png
                    </small>
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
