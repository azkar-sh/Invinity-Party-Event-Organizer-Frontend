import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import ListEvent from "../../components/ListEvent";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataEvent } from "../../stores/actions/event";

export default function ManageEvent() {
  const event = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getDataEvent()).then((response) => {
      setData(response.value.data.data);
    });
  };

  useEffect(() => {
    setData(event.eventData);
  }, []);

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
                  <h2>Manage Event</h2>
                </div>

                <div className="row px-4 py-3">
                  <div className="col-sm-12">
                    {data.map((item) => (
                      <div key={item.eventId}>
                        <ListEvent data={item} />
                      </div>
                    ))}
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
