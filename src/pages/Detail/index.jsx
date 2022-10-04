import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import DetailEvent from "../../components/detailEvent";

export default function Detail() {
  const [data, setData] = useState([]);
  const eventId = localStorage.getItem("eventid");

  useEffect(() => {
    getDataEvent();
  }, []);

  const getDataEvent = async () => {
    try {
      const result = await axios.get(`event/${eventId}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Header */}
      <Header />

      {/* Start Content */}
      <div
        className="container-fluid bg-secondary"
        style={{ marginTop: "75px" }}
      >
        <div className="container bg-primary rounded-5">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id}>
                <DetailEvent data={item} />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3>Data Not Found !</h3>
            </div>
          )}
        </div>
      </div>
      {/* End Content */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
