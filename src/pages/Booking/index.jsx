import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import ListBooking from "../../components/ListBooking";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Wishlist() {
  const data = useSelector((state) => state.wishlist.wishlistData);
  const bookingData = useSelector((state) => state.booking);

  console.log(bookingData);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div>
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
              <div className="container bg-white rounded-5 overflow-auto vh-100">
                <div className="px-4 pt-5 mb-3">
                  <h2>My Booking List</h2>
                </div>

                <div className="row px-4 py-3">
                  <div className="col-sm-12">
                    {data.length > 0 ? (
                      data.map((item) => (
                        <div key={item.wishlistId}>
                          <ListBooking data={item} />
                        </div>
                      ))
                    ) : (
                      <div>
                        <h3>Your Wishlist is Empty!</h3>
                        <h5>Check our fantastic event here</h5>
                        <button
                          className="btn btn-outline-primary mt-3"
                          onClick={handleNavigate}
                        >
                          Home
                        </button>
                      </div>
                    )}
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
