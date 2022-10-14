import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

import { useSelector, useDispatch } from "react-redux";
import { getDataUserById } from "../../stores/actions/user";

export default function DetailUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userId } = useParams();
  const [defaultImage, setDefaultImage] = useState("");

  const getUserData = async () => {
    try {
      const response = await axios.get(`/user/${userId}`);
      setDefaultImage(response.data.data[0].image);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getDataUserById(userId));
    setDefaultImage(user?.userData[0]?.image);
  }, [userId]);

  useEffect(() => {
    getUserData();
  }, []);

  const userImageData = user?.userData[0]?.image;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userImageData}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${user?.userData[0]?.username}`;

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
                  <h2>Profile</h2>
                </div>
                <div className="row px-4 py-3">
                  <div className="col-sm-3">
                    <p className="my-4">Name</p>

                    <p className="my-4">Username</p>

                    <p className="my-4">Email</p>

                    <p className="my-4">Gender</p>

                    <p className="my-4">Profession</p>

                    <p className="my-4">Nationality</p>

                    <p className="my-4">Birthday Date</p>
                  </div>
                  <div className="col-sm-5">
                    <p className="my-4">
                      {user?.userData[0]?.name ? (
                        user?.userData[0]?.name
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.username ? (
                        user?.userData[0]?.username
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.email ? (
                        user?.userData[0]?.email
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.gender ? (
                        user?.userData[0]?.gender
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.profession ? (
                        user?.userData[0]?.profession
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.nationality ? (
                        user?.userData[0]?.nationality
                      ) : (
                        <br />
                      )}
                    </p>

                    <p className="my-4">
                      {user?.userData[0]?.dateOfBirth ? (
                        user?.userData[0]?.dateOfBirth
                      ) : (
                        <br />
                      )}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <img
                      src={defaultImage ? userImage : randomImage}
                      alt=""
                      className="w-100 rounded-circle"
                    />
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
