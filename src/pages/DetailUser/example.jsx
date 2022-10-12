import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getDataUserById, updateDataUser } from "../../stores/actions/user";

export default function DetailUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [updateData, setUpdateData] = useState({
    name: "",
    username: "",
    profession: "",
    gender: "",
    dateOfBirth: "",
  });
  const user = useSelector((state) => state.user);
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${user.userData.image}`;

  useEffect(() => {
    dispatch(getDataUserById(userId));
  }, [userId]);

  const handleBack = () => {
    navigate(`/`);
  };

  const handleUpdate = () => {
    dispatch(updateDataUser(userId, updateData));
  };

  const handleChange = (e) => {
    setUpdateData({
      [e.target.name]: e.target.value,
    });
  };
  console.log(user.userData[0]);

  return (
    <div>
      <div className="container border rounded-5">
        <div className="div py-5 px-5">
          <h1>Detail User</h1>
          <hr />
          <div className="row">
            <div className="col">
              <small>Name</small>
              <h5>
                {user.userData[0].name} <br />
              </h5>
              <input
                type="text"
                placeholder=""
                name="name"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Username</small>
              <h5>
                {user.userData[0].username} <br />
              </h5>
              <input
                type="text"
                placeholder=""
                name="username"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Email</small>
              <h5>
                {user.userData[0].email} <br />
              </h5>
              <input type="text" placeholder="" name="email" disabled />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Profession</small>
              <h5>
                {user.userData[0].profession} <br />
              </h5>
              <input
                type="text"
                placeholder=""
                name="profession"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Gender</small>
              <h5>
                {user.userData[0].gender} <br />
              </h5>
              <input
                type="text"
                placeholder=""
                name="gender"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Birthday Date</small>
              <h5>
                {user.userData[0].dateOfBirth} <br />
              </h5>
              <input
                type="date"
                name="dateOfBirth"
                onChange={handleChange}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => {
                  e.target.type = "text";
                }}
                placeholder={user.userData[0].dateOfBirth}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <small>Photos</small>
              <img src={userImage} alt="" />
              <br />
              <input
                type="file"
                placeholder=""
                name="gender"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="btn btn-outline-danger my-5 me-3"
            onClick={handleBack}
          >
            Back
          </button>
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
