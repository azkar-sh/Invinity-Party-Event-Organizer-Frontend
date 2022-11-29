import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";

import { useSelector } from "react-redux";

export default function DetailUser() {
  const userData = useSelector((state) => state.user.userData);

  const userImageData = userData?.image;
  const userImage = `https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${userImageData}`;
  const randomImage = `https://ui-avatars.com/api/?background=random&name=${userData?.username}`;

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
                      {userData?.name ? userData?.name : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.username ? userData?.username : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.email ? userData?.email : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.gender ? userData?.gender : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.profession ? userData?.profession : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.nationality ? userData?.nationality : <br />}
                    </p>

                    <p className="my-4">
                      {userData?.dateOfBirth ? userData?.dateOfBirth : <br />}
                    </p>
                  </div>
                  <div className="col-sm-4">
                    <img
                      src={userData !== null ? userImage : randomImage}
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
