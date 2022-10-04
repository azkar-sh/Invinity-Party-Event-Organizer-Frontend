import React from "react";
import { useNavigate } from "react-router-dom";
import event1 from "../../assets/img/Event 1.jpg";

export default function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
    localStorage.getItem("eventId");
  };
  console.log(props);
  return (
    <div>
      <div
        className="card h-100"
        style={{ width: "15rem" }}
        onClick={handleDetail}
      >
        <img className="card-img-top" src={event1} alt="Card image cap" />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end text-white">
          {/* <div className="card-body text-white"> */}
          <small className="mb-2">{props.data.dateTimeShow}</small>
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.detail}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
