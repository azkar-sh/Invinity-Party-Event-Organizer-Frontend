import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardEvent(props) {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
    localStorage.getItem("eventId");
  };

  return (
    <div>
      <div
        className="card h-100"
        style={{ width: "15rem" }}
        onClick={handleDetail}
      >
        <img
          className="card-img-top"
          src={`https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${props.data.image}`}
          alt="Card image cap"
        />
        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end text-white">
          {/* <div className="card-body text-white"> */}
          <small className="mb-2">{props.data.dateTimeShow}</small>
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">{props.data.category}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
