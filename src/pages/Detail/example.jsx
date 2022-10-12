import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./index.css";
import axios from "../../utils/axios";
import { useState, useEffect } from "react";
import DetailEvent from "../../components/detailEvent";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { eventId } = useParams();

  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-light">
      {/* Header */}
      <Header />

      {/* Start Content */}
      <div
        className="container-fluid bg-light pt-5 pb-5"
        style={{ marginTop: "75px" }}
      >
        <div className="container bg-white rounded-5">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id}>
                <DetailEvent data={item} />
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3>Please Wait!</h3>
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
