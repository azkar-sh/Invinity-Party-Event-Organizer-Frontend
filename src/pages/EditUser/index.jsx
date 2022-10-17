import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  updateDataUser,
  updateImageUser,
  getDataUser,
} from "../../stores/actions/user";

export default function DetailUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();

  const user = useSelector((state) => state.user);
  const [form, setForm] = useState(user.userData[0]);
  const [updateImage, setUpdateImage] = useState(user.userData[0].image);

  useEffect(() => {
    setDefaultImage(user.userData[0].image);
  }, [userId]);

  //Handle Update Data
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    dispatch(updateDataUser(userId, form)).then(() => {
      dispatch(getDataUser());
      alert("Update Data Success");
      navigate(`/user/${userId}`);
    });
  };

  //Handle Update Image
  const handleImage = (e) => {
    setUpdateImage(e.target.files[0]);
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", updateImage);
    dispatch(updateImageUser(userId, formData)).then(() => {
      dispatch(getDataUser());
      alert("Update Image Success");
      navigate(`/user/${userId}`);
    });
  };

  const [defaultImage, setDefaultImage] = useState(null);
  const userImageData = user.userData[0].image;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userImageData}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${user.userData[0].username}`;

  return (
    <div className="bg-light">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="col-sm-4">
              {/* Side Navbar */}
              <SideNavbar />
            </div>
            <div className="col-sm-8">
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
                          placeholder={form.name}
                          onChange={handleChange}
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
                          placeholder={form.username}
                          onChange={handleChange}
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
                          placeholder={form.email}
                          readOnly
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Phone</label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control w-75"
                          name="phoneNumber"
                          placeholder={form.phoneNumber}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-3 col-form-label">Gender</label>
                      <div className="d-flex flex-row align-items-center col-sm-9">
                        <div
                          className="form-check form-check-inline"
                          onChange={handleChange}
                          value={form.gender}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
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
                            name="gender"
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
                          placeholder={form.profession}
                          onChange={handleChange}
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
                          placeholder={form.nationality}
                          onChange={handleChange}
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
                          value={form.dateOfBirth}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="my-5 row">
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          name="submit"
                          onClick={handleUpdate}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 text-center">
                    <label>
                      {/* <input
                        type="file"
                        name=""
                        // style={{ display: "none" }}
                        onChange={(e) => {
                          handleImage(e);
                        }}
                      /> */}
                      <input
                        type="file"
                        // className="form-control w-100 mb-2"
                        style={{ display: "none" }}
                        name="image"
                        onChange={(e) => {
                          // onSelectFile(e);
                          handleImage(e);
                        }}
                      />
                      <img
                        src={defaultImage ? userImage : randomImage}
                        alt=""
                        className="w-100 rounded-circle"
                      />
                    </label>
                    <br />
                    <button
                      className="btn btn-outline-primary mt-3"
                      onClick={handleUpdateImage}
                    >
                      Change Image
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
